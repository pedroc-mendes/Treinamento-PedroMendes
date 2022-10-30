import express from "express";
import Piu from "../Models/Piu";
import User from "../Models/User";

const routes = express.Router();

const users = [] as User[];

const pius = [] as Piu[];

routes.post("/users", (req, res) => {
  const { name, cpf, nascimento, telefone } = req.body;

  if (name === "") return res.status(400).json({ message: "Name is missing" });
  if (cpf === "") return res.status(400).json({ message: "CPF is missing" });
  if (nascimento === "")
    return res.status(400).json({ message: "Birthday is missing" });
  if (telefone === "")
    return res.status(400).json({ message: "Phone is missing" });
  if (users.find((user) => user.cpf === cpf))
    return res
      .status(400)
      .json({ message: "User with this cpf already exists" });

  const user = new User(name, cpf, nascimento, telefone)

  users.push(user);

  return res.json(user);
});

routes.post("/users/pius/:userid", (req, res) => {
  const { texto } = req.body;

  const { userid } = req.params;

  if (!users.find((user) => user.userid === userid))
    return res.status(404).json({ message: "user not found" });

  if (texto === "")
    return res.status(400).json({ message: "An empty piu can't be sent" });
  if (texto.length > 140)
    return res.status(400).json({ message: "Piu is too long" });

  const piu = new Piu(texto)

  pius.push(piu);

  return res.json(piu);
});

routes.get("/users/pius", (req, res) => {
  return res.json(pius);
});

routes.get("/users/pius/:id", (req, res) => {
  const { id } = req.params;

  const piu = pius.find((piu) => piu.id === id);

  if (!piu) return res.status(404).json({ message: "Piu not found" });

  return res.json(piu);
});

routes.get("/users", (req, res) => {
  return res.json(users);
});

routes.get("/users/:userid", (req, res) => {
  const { userid } = req.params;

  const user = users.find((user) => user.userid === userid);

  if (!user) return res.status(404).json({ message: "User not found" });

  return res.json(user);
});

routes.put("/users/:userid", (req, res) => {
  const { userid } = req.params;
  const { name, cpf, nascimento, telefone } = req.body;

  if (name === "") return res.status(400).json({ message: "Name is missing" });
  if (cpf === "") return res.status(400).json({ message: "CPF is missing" });
  if (nascimento === "")
    return res.status(400).json({ message: "Birthday is missing" });
  if (telefone === "")
    return res.status(400).json({ message: "Phone is missing" });

  const userIndex = users.findIndex((user) => user.userid === userid);

  if (userIndex === -1)
    return res.status(404).json({ message: "user not found" });
  users[userIndex].name = name;
  users[userIndex].cpf = cpf;
  users[userIndex].telefone = telefone;
  users[userIndex].nascimento = nascimento;
  users[userIndex].update = new Date();

  return res.json(users[userIndex]);
});

routes.put("/users/pius/:userid/:id", (req, res) => {
  const { texto } = req.body;
  const { userid } = req.params;
  const { id } = req.params;

  if (texto === "")
    return res.status(400).json({ message: "An empty piu can't be sent" });
  if (texto.length > 140)
    return res.status(400).json({ message: "Piu is too long" });

  const piuIndex = pius.findIndex((piu) => piu.id === id);

  if (piuIndex === -1)
    return res.status(404).json({ message: "piu not found" });

  if (!users.find((user) => user.userid === userid))
    return res.status(404).json({ message: "user not found" });
  pius[piuIndex].texto = texto;
  pius[piuIndex].piuupdate = new Date();

  return res.json(pius[piuIndex]);
});

routes.delete("/users/:userid", (req, res) => {
  const { userid } = req.params;

  const user = users.find((user) => user.userid === userid);

  if (!user) return res.status(404).json({ message: "User not found" });

  const deleteUserIndex = users.findIndex((user) => user.userid === userid); 

  users.splice(deleteUserIndex,1)

  return res.json()
});

routes.delete("/users/pius/:userid/:id", (req, res) => {
  const { userid } = req.params;
  const { id } = req.params;
  const user = users.find((user) => user.userid === userid);
  if (!user) return res.status(404).json({ message: "User not found" });
  const piu = pius.find(piu => piu.id === id);
  if (!piu) return res.status(404).json({message: "Piu not found"});

  const deletePiuIndex = pius.findIndex(piu => piu.id === id);

  pius.splice(deletePiuIndex,1)

  return res.json()
})

export default routes;

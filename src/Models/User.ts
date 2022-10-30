import {uuid} from 'uuidv4';
class User {
    find(arg0: (user: { cpf: string; }) => boolean) {
        throw new Error("Method not implemented.");
    }
    name: string;

    cpf: string;

    userid: string;

    nascimento: string;

    telefone: string;

    criacao: Date;

    update: Date;

    constructor(name:string, cpf: string, nascimento: string, telefone: string) {
        this.name = name;
        this.cpf = cpf;
        this.userid = uuid();
        this.nascimento = nascimento;
        this.telefone = telefone;
        this.criacao = new Date();
        this.update = new Date();
    }
}

export default User
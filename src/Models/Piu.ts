import {uuid} from 'uuidv4';
class Piu{
    id: string;

    userid: string;

    texto: string;

    piucriacao: Date;

    piuupdate: Date;

    constructor(texto: string) {
        this.texto = texto;
        this.piucriacao = new Date;
        this.piuupdate = new Date;
        this.id = uuid();
        this.userid = uuid();
    }
}
export default Piu;
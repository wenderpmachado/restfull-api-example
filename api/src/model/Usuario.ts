export class Usuario {
    constructor(private id: number, private nome: string) {
        this.id = id;
        this.nome = nome;
    }

    get getId() {
        return this.id;
    }
    
    get getNome() {
        return this.nome;
    }
}
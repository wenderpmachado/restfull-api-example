export class Usuario {
    constructor(private id: number, private nome: string) {
        this.id = id;
        this.nome = nome;
    }

    getId(): number {
        return this.id;
    }
    
    getNome(): string {
        return this.nome;
    }
}
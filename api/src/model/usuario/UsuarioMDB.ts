import { DataModel } from './../../../core/model/DataModel';
import { UsuarioInterface } from './UsuarioInterface';
import { Entity, Column, ObjectID, ObjectIdColumn } from 'typeorm';
import { Usuario } from "./Usuario";

@Entity('usuario')
export class UsuarioMDB implements UsuarioInterface, DataModel<Usuario> {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    nome: string;

    constructor(id: number, nome: string) {
        this.id = new ObjectID(id);
        this.nome = nome;
    }

    toModel(): Usuario {
        return new Usuario(parseInt(this.id.toString()), this.nome);
    }
}
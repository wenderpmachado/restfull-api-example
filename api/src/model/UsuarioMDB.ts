import { Usuario } from './UsuarioInterface';
import { Entidade } from './../../core/model/Entidade';
import { Entity, Column, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class UsuarioMDB implements Usuario {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    nome: string;
}
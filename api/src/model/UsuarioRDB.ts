import { Usuario } from './UsuarioInterface';
import { Entidade } from './../../core/model/Entidade';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UsuarioRDB implements Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;
}
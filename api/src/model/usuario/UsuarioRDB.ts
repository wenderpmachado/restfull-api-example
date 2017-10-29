import { DataModel } from '../../../core/model/DataModel';
import { UsuarioInterface } from './UsuarioInterface';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from './Usuario';

@Entity('usuario')
export class UsuarioRDB implements UsuarioInterface, DataModel<Usuario> {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', default: ''})
  nome: string;

  constructor(id: number, nome: string) {
    this.id = id;
    this.nome = nome;
  }

  toModel(): Usuario {
    return new Usuario(this.id, this.nome);
  }
}

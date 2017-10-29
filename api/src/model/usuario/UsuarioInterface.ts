import { ObjectID } from 'typeorm';

export interface UsuarioInterface {
  id: number|ObjectID;
  nome: string;
}

import { ObjectID } from 'typeorm';

export interface Usuario {
    id: number|ObjectID,
    nome: string
}
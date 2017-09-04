import { Usuario } from '../model/Usuario';
import { Repository } from 'typeorm';

export interface UsuarioRepository {
    obterRepositorio(): Promise<Repository<Usuario>>
}
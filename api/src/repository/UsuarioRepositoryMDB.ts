import { Usuario } from '../model/Usuario';
import { Service } from 'typedi';
import { Repository } from 'typeorm';
import { UsuarioRepository } from './UsuarioRepository';
import { RepositorioBaseMDB } from '../../core/Repository/RepositorioBaseMDB';

@Service()
export class UsuarioRepositoryMDB extends RepositorioBaseMDB<Usuario> implements UsuarioRepository {
    
    constructor() {
        super();
    }

    async obterRepositorio(): Promise<Repository<Usuario>> {
        return (await super.obterConexao()).getMongoRepository(Usuario);
    }
    
}
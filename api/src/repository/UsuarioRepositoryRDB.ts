import { UsuarioRDB } from '../model/UsuarioRDB';
import { Service } from 'typedi';
import { Repository } from 'typeorm';
import { UsuarioRepository } from './UsuarioRepository';
import { RepositorioBaseRDB } from '../../core/Repository/RepositorioBaseRDB';

@Service()
export class UsuarioRepositoryRDB extends RepositorioBaseRDB<UsuarioRDB> /*implements UsuarioRepository*/ {
    
    constructor() {
        super();
    }

    async obterRepositorio(): Promise<Repository<UsuarioRDB>> {
        return (await super.obterConexao()).getRepository(UsuarioRDB);
    }
    
}
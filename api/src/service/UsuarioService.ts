import { Service } from 'typedi';
import { Inject } from 'typedi';
import { UsuarioRDB } from '../model/UsuarioRDB';
import { UsuarioRepositoryRDB } from '../repository/UsuarioRepositoryRDB';
import { ServiceBase } from '../../core/Service/ServiceBase';

@Service()
export class UsuarioService extends ServiceBase<UsuarioRDB, UsuarioRepositoryRDB> {

    @Inject() private repositorio: UsuarioRepositoryRDB;

    constructor() {
        super();
    }

    obterRepositorio(): UsuarioRepositoryRDB {
        return this.repositorio;
    }

}
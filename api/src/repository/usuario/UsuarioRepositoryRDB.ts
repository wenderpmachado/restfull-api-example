import { UsuarioRepository } from './UsuarioRepository';
import { Service } from "typedi";
import { RepositorioBaseRDB } from "../../../core/repository/RepositorioBaseRDB";
import { UsuarioRDB } from "../../model/usuario/UsuarioRDB";
import { Usuario } from "../../model/usuario/Usuario";
import { Repository } from "typeorm";

@Service()
export class UsuarioRepositoryRDB extends RepositorioBaseRDB<UsuarioRDB> implements UsuarioRepository<Usuario, UsuarioRDB, Repository<UsuarioRDB>> {
    
    constructor() {
        super();
    }

    async obterRepositorio(): Promise<Repository<UsuarioRDB>> {
        return (await super.obterConexao()).getRepository(UsuarioRDB);
    }
    
}
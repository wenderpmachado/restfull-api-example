import { UsuarioRepositoryMDB } from './../repository/usuario/UsuarioRepositoryMDB';
import { UsuarioRepositoryRDB } from '../repository/usuario/UsuarioRepositoryRDB';
import { Service } from 'typedi';
import { Inject } from 'typedi';
import { UsuarioRDB } from '../model/usuario/UsuarioRDB';
import { ServiceBase } from '../../core/Service/ServiceBase';
import { Usuario } from "../model/usuario/Usuario";

@Service()
// export class UsuarioService extends ServiceBase<Usuario, UsuarioRDB> {
export class UsuarioService extends ServiceBase<Usuario, UsuarioRDB> {

    @Inject() private repositorio: UsuarioRepositoryRDB;
    // @Inject() private repositorio: UsuarioRepositoryMDB;

    constructor() {
        super();
    }

    // obterRepositorio(): UsuarioRepositoryMDB {
    obterRepositorio(): UsuarioRepositoryRDB {
        return this.repositorio;
    }

    toDataModel(usuario: Usuario): UsuarioRDB {
        return new UsuarioRDB(usuario.getId(), usuario.getNome());
    }

}
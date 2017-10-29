import { MongoRepository } from 'typeorm';
import { UsuarioRepository } from './UsuarioRepository';
import { UsuarioMDB } from './../../model/usuario/UsuarioMDB';
import { Service } from 'typedi';
import { RepositorioBaseMDB } from '../../../core/repository/RepositorioBaseMDB';
import { Usuario } from '../../model/usuario/Usuario';

@Service()
export class UsuarioRepositoryMDB extends RepositorioBaseMDB<UsuarioMDB>
                                  implements UsuarioRepository<Usuario, UsuarioMDB, MongoRepository<UsuarioMDB>> {
  constructor() {
    super();
  }

  async obterRepositorio(): Promise<MongoRepository<UsuarioMDB>> {
    return (await super.obterConexao()).getMongoRepository(UsuarioMDB);
  }
}

import { DataModel } from './../../../core/model/DataModel';
import { Repository, MongoRepository } from 'typeorm';

export interface UsuarioRepository<T, D extends DataModel<T>, R extends (Repository<D>|MongoRepository<D>)> {
    obterRepositorio(): Promise<R>
}
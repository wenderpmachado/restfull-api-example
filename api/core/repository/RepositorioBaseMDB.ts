import { MongoDBProvider } from './../provider/MongoDBProvider';
import { Repository, Connection } from 'typeorm';
import { RepositorioBase } from './RepositorioBase';

export abstract class RepositorioBaseMDB<T> extends RepositorioBase<T> {

    constructor() {
        super();
    }

    /**
     * Obtem uma instância do repositório associado ao T 
     * para realizar as operaçãos da coleção
     * 
     * @abstract
     * @returns {Promise<Repository<T>>} 
     * @memberof RepositorioBaseMDB
     */
    abstract async obterRepositorio(): Promise<Repository<T>>;

    async obterConexao(): Promise<Connection> {
        return await MongoDBProvider.obterConexao();
    }

}
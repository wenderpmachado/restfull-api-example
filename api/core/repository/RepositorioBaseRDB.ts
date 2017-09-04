import { MySQLProvider } from '../provider/MysqlProvider';
import { Repository, Connection } from 'typeorm';
import { RepositorioBase } from './RepositorioBase';

export abstract class RepositorioBaseRDB<T> extends RepositorioBase<T> {

    constructor() {
        super();
    }

    /**
     * Obtem uma instância do repositório associado ao T 
     * para realizar as operaçãos da coleção
     * 
     * @abstract
     * @returns {Promise<Repository<T>>} 
     * @memberof RepositorioBaseRDB
     */
    abstract async obterRepositorio(): Promise<Repository<T>>;

    async obterConexao(): Promise<Connection> {
        return await MySQLProvider.obterConexao();
    }

}
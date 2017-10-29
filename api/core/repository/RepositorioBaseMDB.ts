import { MongoDBProvider } from './../provider/MongoDBProvider';
import { Connection, MongoRepository } from 'typeorm';
import { RepositorioBase } from './RepositorioBase';

export abstract class RepositorioBaseMDB<T> extends RepositorioBase<T> {
  protected colecao: Promise<MongoRepository<T>>;

  constructor() {
    super();
  }

  /**
   * Obtem uma instância do repositório associado ao T
   * para realizar as operaçãos da coleção
   *
   * @abstract
   * @returns {Promise<MongoRepository<T>>}
   * @memberof RepositorioBaseMDB
   */
  abstract async obterRepositorio(): Promise<MongoRepository<T>>;

  /**
   * Ontem a instância da coleção
   *
   * @returns {Promise<MongoRepository<T>>}
   * @memberof RepositorioBaseMDB
   */
  async obterColecao(): Promise<MongoRepository<T>> {
    return this.colecao;
  }

  /**
   * Obtem uma instância de conexão com o banco de dados
   *
   * @returns {Promise<Connection>}
   * @memberof RepositorioBaseMDB
   */
  async obterConexao(): Promise<Connection> {
    return await MongoDBProvider.obterConexao();
  }
}

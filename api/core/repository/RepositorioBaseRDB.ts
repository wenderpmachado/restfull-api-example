import { MySQLProvider } from '../provider/MysqlProvider';
import { Repository, Connection } from 'typeorm';
import { Repositorio } from './Repositorio';
import { RepositorioBase } from './RepositorioBase';

export abstract class RepositorioBaseRDB<T> extends RepositorioBase<T> {
  protected colecao: Promise<Repository<T>>;

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

  /**
   * Obtem uma instância de conexão com o banco de dados
   *
   * @returns {Promise<Connection>}
   * @memberof RepositorioBaseRDB
   */
  async obterConexao(): Promise<Connection> {
    return await MySQLProvider.obterConexao();
  }

    /**
   * Ontem a instância da coleção
   *
   * @returns {Promise<Repository<T>>}
   * @memberof RepositorioBaseRDB
   */
  async obterColecao(): Promise<Repository<T>> {
    return this.colecao;
  }

  async buscarMultiplo(): Promise<T[]> {
    return (await this.colecao).find();
  }

  async buscarUm(id: number): Promise<T> {
    return (await this.colecao).findOneById(id);
  }

  async salvar(t: T): Promise<T> {
    return (await this.colecao).save(t);
  }

  async excluirUm(id: number): Promise<void> {
    return (await this.colecao).removeById(id);
  }
}

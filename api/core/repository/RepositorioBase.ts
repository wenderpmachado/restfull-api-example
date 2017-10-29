import { Repositorio } from './Repositorio';
import { Repository, Connection, MongoRepository } from 'typeorm';

export abstract class RepositorioBase<T> implements Repositorio<T> {
  protected colecao: any;

  constructor() {
    try {
      this.colecao = this.obterRepositorio();
    } catch (error) {
      console.log('Erro ao obter colecao.');
    }
  }

  /**
   * Obtem uma instância do repositório associado ao T
   * para realizar as operaçãos da coleção
   *
   * @returns {Promise<any>}
   * @memberof RepositorioBase
   */
  abstract async obterRepositorio(): Promise<any>;

  abstract async obterColecao(): Promise<any>;

  /**
   * Obtem uma conexão de um provedor de banco de dados
   *
   * @abstract
   * @returns {Promise<Connection>}
   * @memberof RepositorioBase
   */
  abstract async obterConexao(): Promise<Connection>;

  async buscarMultiplo(): Promise<T[]> {
    return (await this.obterColecao()).find();
  }

  async buscarUm(id: number): Promise<T> {
    return (await this.obterColecao()).findOneById(id);
  }

  async salvar(T: T): Promise<T> {
    return (await this.obterColecao()).save(T);
  }

  async excluirUm(id: number): Promise<void> {
    return (await this.obterColecao()).removeById(id);
  }
}

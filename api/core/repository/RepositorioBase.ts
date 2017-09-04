import { Repositorio } from './Repositorio';
import { Repository, Connection } from 'typeorm';

export abstract class RepositorioBase<T> implements Repositorio<T> {

    private conexao: Connection;
    private colecao: Promise<Repository<T>>;

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
     * @returns {Promise<Repository<T>>} 
     * @memberof RepositorioBase
     */
    abstract async obterRepositorio(): Promise<Repository<T>>;

    /**
     * Obtem uma conexão de um provedor de banco de dados
     * 
     * @abstract
     * @returns {Promise<Connection>} 
     * @memberof RepositorioBase
     */
    abstract async obterConexao(): Promise<Connection>;

    async buscarMultiplo(): Promise<T[]> {
        return (await this.colecao).find();
    }

    async buscarUm(id: number): Promise<T> {
        return (await this.colecao).findOneById(id);
    }

    async salvar(T: T): Promise<T> {
        return (await this.colecao).save(T);
    }

    async excluirUm(id: number): Promise<void> {
        return (await this.colecao).removeById(id);
    }

}
export interface Repositorio<T> {
    /**
     * Busca N objetos do tipo T na base de dados
     * 
     * @returns {Promise<T[]>} 
     * @memberof Repositorio
     */
    buscarMultiplo(): Promise<T[]>;
    /**
     * Busca um objeto do tipo T na base de dados, através do seu id
     * 
     * @param {number} id 
     * @returns {Promise<T>} 
     * @memberof Repositorio
     */
    buscarUm(id: number): Promise<T>;
    /**
     * Exclui um objeto do tipo T na base de dados, através do seu id
     * 
     * @param {number} id 
     * @returns {Promise<void>} 
     * @memberof Repositorio
     */
    excluirUm(id: number): Promise<void>;
    /**
     * Salva um objeto do tipo T na base de dados
     * 
     * @param {T} obj 
     * @returns {Promise<T>} 
     * @memberof Repositorio
     */
    salvar(obj: T): Promise<T>
}
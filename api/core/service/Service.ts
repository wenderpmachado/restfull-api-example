export interface Service<T> {
    /**
     * Busca N objetos do tipo T na base de dados
     * 
     * @returns {Promise<T[]>} 
     * @memberof Service
     */
    buscarMultiplo(): Promise<T[]>;
    /**
     * Busca um objeto do tipo T na base de dados, através do seu id
     * 
     * @param {number} id 
     * @returns {Promise<T>} 
     * @memberof Service
     */
    buscarUm(id: number): Promise<T>;
    /**
     * Exclui um objeto do tipo T na base de dados, através do seu id
     * 
     * @param {number} id 
     * @returns {Promise<object>} 
     * @memberof Service
     */
    excluirUm(id: number): Promise<object>;
    /**
     * Salva um objeto do tipo T na base de dados
     * 
     * @param {T} obj 
     * @returns {Promise<T>} 
     * @memberof Service
     */
    salvar(obj: T): Promise<T>
}
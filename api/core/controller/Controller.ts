export interface Controller<T> {
  /**
   * Busca N objetos do tipo T na base de dados
   *
   * @returns {Promise<T[]>}
   * @memberof Controller
   */
  buscarMultiplo(): Promise<T[]>;
  /**
   * Busca um objeto do tipo T na base de dados, através do seu id
   *
   * @param {number} id
   * @returns {Promise<T>}
   * @memberof Controller
   */
  buscarUm(id: number): Promise<T>;
  /**
   * Exclui um objeto do tipo T na base de dados, através do seu id
   *
   * @param {number} id
   * @returns {Promise<object>}
   * @memberof Controller
   */
  excluirUm(id: number): Promise<object>;
  /**
   * Salva um objeto do tipo T na base de dados
   *
   * @param {T} obj
   * @returns {Promise<T>}
   * @memberof Controller
   */
  salvar(obj: T): Promise<T>;
}

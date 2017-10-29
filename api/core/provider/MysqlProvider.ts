import { Connection, createConnection } from 'typeorm';

/**
 * Classe responsavel por prover comunicação com o SGDB MySQL
 *
 * @export
 * @class MySQLProvider
 */
export class MySQLProvider {
  static connection: Connection;

  private constructor() {

  }

  /**
   * Obtem uma conexão com o SGDB MySQL em forma de Singleton.
   * Caso não exista uma atribuição para a variavel `connection`
   * esta tenta estabelecer uma conexão.
   *
   * @static
   * @returns {Promise<Connection>}
   * @memberof MySQLProvider
   */
  static async obterConexao(): Promise<Connection> {
    if (!MySQLProvider.connection) {
      MySQLProvider.connection = await createConnection({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        entities: [
            __dirname + '/../../src/model/**/*RDB.js'
        ],
        autoSchemaSync: true
      });
    }

    return MySQLProvider.connection;
  }
}

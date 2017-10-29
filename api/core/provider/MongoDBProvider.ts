import { Connection, createConnection } from 'typeorm';

/**
 * Classe responsavel por prover comunicação com o SGDB MySQL
 *
 * @export
 * @class MongoDBProvider
 */
export class MongoDBProvider {
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
   * @memberof MongoDBProvider
   */
  static async obterConexao(): Promise<Connection> {
    if (!MongoDBProvider.connection) {
      MongoDBProvider.connection = await createConnection({
        type: 'mongodb',
        host: 'localhost',
        port: 27017,
        database: 'test',
        entities: [
            __dirname + '/../../src/model/**/*MDB.js'
        ],
        autoSchemaSync: true
      });
    }

    return MongoDBProvider.connection;
  }
}

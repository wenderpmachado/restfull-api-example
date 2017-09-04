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
        if(!MySQLProvider.connection) {
            MySQLProvider.connection = await createConnection({
                type: "mysql",
                host: "localhost",
                port: 3306,
                username: "root",
                password: "root",
                database: "test",
                entities: [
                    __dirname + '/../../src/model/*RDB.js'
                ],
                autoSchemaSync: true
            });
        }
        return MySQLProvider.connection;
    }
}
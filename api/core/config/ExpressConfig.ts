import { createExpressServer } from "routing-controllers";
import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

export class ExpressConfig {
    private static express: express.Application;

    private constructor() {}
    
    /**
     * Obtem uma instância do express
     * 
     * @static
     * @returns {express.Application} 
     * @memberof ExpressConfig
     */
    public static obterInstancia(): express.Application {
        if (!this.express) {
            this.criarServerExpressComRotas();
            this.middleware();
        }        
        return this.express;
    }
    
    /**
     * Cria uma instância do express atribuindo as rotas configuradas nos arquivos
     * da pasta /Controller/*.js
     * 
     * @private
     * @static
     * @memberof ExpressConfig
     */
    private static criarServerExpressComRotas(): void {
        this.express = createExpressServer({ 
            routePrefix: "/api/v1",
            controllers: [__dirname + "/../../src/controller/*.js"] 
        });
    }

    /**
     * Configura os middlewares do express
     * 
     * @private
     * @static
     * @memberof ExpressConfig
     */
    private static middleware(): void {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }
}

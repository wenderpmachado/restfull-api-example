import { DotEnv } from './core/config/DotEnvConfig';
import { Server } from './core/config/Server';
import { ExpressConfig } from './core/config/ExpressConfig';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Request, Response } from 'express';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { MongoDBProvider } from './core/provider/MongoDBProvider';
import { MySQLProvider } from './core/Provider/MysqlProvider';

// configura as variáveis de ambiente
DotEnv.config(process.env.NODE_ENV);

// obtem uma conexão com o banco de dados escolhido
MySQLProvider.obterConexao().then(async connection => {
// MongoDBProvider.obterConexao().then(async connection => {

    // cria a variavel do express
    const app = ExpressConfig.obterInstancia();

    // attribui express ao servidor
    const server = new Server(app);

    // roda o servidor
    server.start();

}).catch(error => console.log('TypeORM connection error: ', error));
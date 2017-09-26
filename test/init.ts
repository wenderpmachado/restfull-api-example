import { DotEnv } from './../api/core/config/DotEnvConfig';
import { ExpressConfig } from './../api/core/config/ExpressConfig';
import { Server } from './../api/core/config/Server';
import { suite, test } from "mocha-typescript";
import { Service, Inject } from "typedi";
import httpStatus = require('http-status');
import chaiHttp = require('chai-http');
import * as mocha from 'mocha';
import * as chai from 'chai';
import * as express from 'express';

// configura as variáveis de ambiente
DotEnv.config(process.env.NODE_ENV);

const app: express.Application = ExpressConfig.obterInstancia();
const server: Server = new Server(app);

chai.use(chaiHttp);
const expect: Chai.ExpectStatic = chai.expect;
const request = chai.request("http://localhost:"+ server.obterPorta() +"/api/v1")

export {
    app, 
    request,
    expect, 
    httpStatus,
    suite,
    test,
    server
};
import { Service } from '../service/Service';
import { Repositorio } from '../repository/Repositorio';
import { Controller } from './controller';
import { Get, Post, Delete, Param, Body } from 'routing-controllers';

export abstract class ControllerBase<T, S extends Service<T>> implements Controller<T> {

    abstract obterServico(): S;

    async buscarMultiplo(): Promise<T[]> {
        return await this.obterServico().buscarMultiplo();
    }

    async buscarUm(id: number): Promise<T> {
        return await this.obterServico().buscarUm(id);
    }

    async salvar(t: T): Promise<T> {
        return await this.obterServico().salvar(t);
    }

    async excluirUm(id: number): Promise<object> {
        return await this.obterServico().excluirUm(id);
    }

}
import { Service } from './Service';
import { Repositorio } from '../Repository/Repositorio';

export abstract class ServiceBase<T, R extends Repositorio<T>> implements Service<T> {
    abstract obterRepositorio(): R;
    
    async buscarMultiplo(): Promise<T[]> {
        return await this.obterRepositorio().buscarMultiplo();
    }

    async buscarUm(id: number): Promise<T> {
        return await this.obterRepositorio().buscarUm(id);
    }

    async salvar(t: T): Promise<T> {
        return await this.obterRepositorio().salvar(t);
    }

    async excluirUm(id: number): Promise<object> {
        try {
            await this.obterRepositorio().excluirUm(id);
            return { 'success' : true };
        } catch (error) {
            return { 'success' : false };
        }
    }
}
import { DataModel } from './../model/DataModel';
import { Service } from './Service';
import { Repositorio } from '../Repository/Repositorio';

export abstract class ServiceBase<T, D extends DataModel<T>> implements Service<T> {
  abstract obterRepositorio(): any;
  abstract toDataModel(model: T): D;

  async buscarMultiplo(): Promise<T[]> {
    return (await this.obterRepositorio().buscarMultiplo()).map( dataModel => dataModel.toModel() );
  }

  async buscarUm(id: number): Promise<T> {
    return (await this.obterRepositorio().buscarUm(id)).toModel();
  }

  async salvar(t: T): Promise<T> {
    return (await this.obterRepositorio().salvar(this.toDataModel(t))).toModel();
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

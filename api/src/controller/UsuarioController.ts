import { UsuarioService } from './../service/UsuarioService';
import { JsonController, Get, Post, Param, Delete, Body } from 'routing-controllers';
import { Service, Inject } from 'typedi';
import { UsuarioRDB } from '../model/UsuarioRDB';
import { ControllerBase } from '../../core/Controller/ControllerBase';

@Service()
@JsonController()
export class UsuarioController extends ControllerBase<UsuarioRDB, UsuarioService> {

    @Inject() private servico: UsuarioService;

    constructor() {
        super();
    }

    obterServico(): UsuarioService {
        return this.servico;
    }

    @Get('/usuario/')
    async buscarMultiplo(): Promise<UsuarioRDB[]> {
        return super.buscarMultiplo();
    }

    @Get('/usuario/:id')
    async buscarUm(@Param('id') id: number): Promise<UsuarioRDB> {
        return super.buscarUm(id);
    }

    @Post('/usuario/')
    async salvar(@Body() usuario: UsuarioRDB): Promise<UsuarioRDB> {
        return super.salvar(usuario);
    }

    @Delete('/usuario/:id')
    async excluirUm(@Param('id') id: number): Promise<object> {
        return super.excluirUm(id);
    }

}
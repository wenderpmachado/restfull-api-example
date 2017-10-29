import { UsuarioService } from './../service/UsuarioService';
import { JsonController, Get, Post, Param, Delete, Body } from 'routing-controllers';
import { Service, Inject } from 'typedi';
import { UsuarioRDB } from '../model/usuario/UsuarioRDB';
import { ControllerBase } from '../../core/Controller/ControllerBase';
import { Usuario } from '../model/usuario/Usuario';

@Service()
@JsonController()
export class UsuarioController extends ControllerBase<Usuario, UsuarioService> {

  @Inject() private servico: UsuarioService;

  constructor() {
    super();
  }

  obterServico(): UsuarioService {
    return this.servico;
  }

  @Get('/usuario/')
  async buscarMultiplo(): Promise<Usuario[]> {
    return super.buscarMultiplo();
  }

  @Get('/usuario/:id')
  async buscarUm(@Param('id') id: number): Promise<Usuario> {
    return super.buscarUm(id);
  }

  @Post('/usuario/')
  async salvar(@Body() usuario: Usuario): Promise<Usuario> {
    return super.salvar(usuario);
  }

  @Delete('/usuario/:id')
  async excluirUm(@Param('id') id: number): Promise<object> {
    return super.excluirUm(id);
  }
}

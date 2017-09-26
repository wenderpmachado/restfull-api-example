import { Usuario } from './../../api/src/model/usuario/Usuario';
import { expect, suite, test, request, httpStatus, server, app } from "../init";

@suite("[Teste de Integração - Usuario]")
class UsuarioRouteTest {
    private usuario: Usuario;
    private res: ChaiHttp.Response;

    static before(done) {
        // server.start();
        setTimeout(done, 1000);
    }

    async before() {
        this.usuario = new Usuario(1, "Wender P Machado");
    }

    @test('POST /api/v1/usuario/ HTTP/1.1') 
    async CriarUmUsuarioTest() {
        this.res = await request.post('/usuario/').send(this.usuario);
        expect(this.res.status).to.equal(httpStatus.OK);
    }

    @test('GET /api/v1/usuario/ HTTP/1.1') 
    async ObterTodosUsuariosTest() {
        this.res = await request.get('/usuario/');
        expect(this.res.status).to.equal(httpStatus.OK);
        expect(this.res).to.be.json;
        expect(this.res.body).to.be.an('array');
        expect(this.res.body).to.have.length(1);
    }

    @test('GET /api/v1/usuario/1 HTTP/1.1') 
    async ObterUmUsuarioTest() {
        this.res =  await request.get('/usuario/' + this.usuario.getId());
        expect(this.res.body).to.exist;
        expect(this.res.status).to.equal(httpStatus.OK);
        expect(this.res).to.be.json;
        expect(this.res.body).to.have.contains.keys([
            'id', 'nome'
        ]);
        expect(this.res.body.id).to.equal(this.usuario.getId());
        expect(this.res.body.nome).to.equal(this.usuario.getNome());
    }

    @test('DELETE /api/v1/usuario/1 HTTP/1.1') 
    async RemoverUmUsuarioTest() {
        this.res =  await request.del('/usuario/' + this.usuario.getId());
        expect(this.res).to.be.json;
        expect(this.res.status).to.equal(httpStatus.OK);
        expect(this.res.body.success).to.be.true;
    }

    // static after() {
    //     server.obterInstancia().close();
    // }
}
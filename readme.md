# Pré-requisitos #

- [x] **Ter instalado o git em seu ambiente de desenvolvimento**
    - baixando pelo site do próprio [git](https://git-scm.com/)
- [x] **Ter instalado o node.js/npm em seu ambiente de desenvolvimento**
    - preferencialmente a release [v7.10](https://nodejs.org/download/release/v7.10.1/)

# Primeiros passos #

Primeiramente, atuaize suas dependencias com o comando abaixo:

```
npm install
```

Depois, verifique se está configurado corretamente o acesso ao seu servidor de bando de dados, no arquivo `api/core/provider/NomeDoSeuProvider.ts`

Para levantar o servidor node, execute o comando abaixo:

```bash
npm start
```

Se a mensagem "O servidor Node.js + Express está funcionando na 3000" aparecer em seu terminal, sua api estará funcionando em: `http://localhost:3000/api/v1/nomeDaRota/`

Por padrão, a rota `http://localhost:3000/api/v1/usuario/` está configurada com o CRUD, que pode ser testado com os comandos de exemplo no arquivo `test/UsuarioControllerHTTP.txt`

# Architecture #

A arquitetura é baseada em MVC, Repository Pattern e alguns outros Project / Programming Patterns.

Após a obtenção do projeto, você terá a seguinte árvore de diretório:

```
├── tests -> Pasta que contem todos os arquivos de teste
├── api   -> Arquivos relacionados a API
    ├── controller    -> Coloque suas controladoras/roteadoras aqui
    ├── model         -> Coloque seus modelos/mappings aqui
    ├── repository    -> Coloque suas coleções/repositorios aqui
    ├── services      -> Coloque seus servicos aqui
    ├── core          -> Pasta que terá todos os arquivos base. Seja cuidadoso!
        ├── config      -> Configurações do servidor e da API
        ├── controller  -> Arquivos auxiliares as controladoras
        ├── model       -> Arquivos auxiliares aos modelos
        ├── provider    -> Provedores/adaptadores de conexão com o banco de dados
        ├── repository  -> Arquivos auxiliares as coleções/repositorios
        ├── service     -> Arquivos auxiliares aos serviços
```

E dentro da pasta api, temos o arquivo `index.ts` que irá "startar" o sistema, utilizando os arquivos de configuração dentr da pasta `api/core/config`.


# No decorrer do desenvolvimento #

O projeto possui o seguinte fluxo:
```
index.ts    ->      UsuarioController       ->      UsuarioService      ->      UsuarioRepository   --
                                                                                                      |
resposta    <-                              <-                          <-                          <-
```
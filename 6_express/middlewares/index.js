const express = require('express')
const app = express()
const port = 3000
const path = require('path')

const checkAuthUser = function (req, res, next) {
    req.authStatus = false

    if (req.authStatus) {
        console.log('Usuário logado')
        next()
    } else {
        console.log('Usuário deslogado')
        next()
    }
}

/*
Vamos pensar como funciona o lifecycle de uma requisição. Toda vez que uma request chega, ela precisa ser resolvida. E pra resolvê-la chamamos um controller que contém uma regra de negócio e no fim respondemos essa requisição (Request -> Controller -> Response).
E um middleware serve para mudar essa história. Antes da request chegar no controller, ela é interceptada por nossos middlewares (plural pois é possível ter vários). Então a request passa chega e passa pelos middlewares para só então chegar no controller (Request -> Middlewares -> Controller -> Response).
Manipular os objetos de REQUEST e RESPONSE (injetar propriedades, deletar, editar etc... De forma que fique disponível em todos os controllers da aplicação). Ou, então, ter um controle minuscioso, por exemplo: Eu quero que um middleware execute apenas para um grupo de rotas ou rota específica.
*/
app.use(checkAuthUser)

const basePath = path.join(__dirname, 'templates') //aqui estou acessando o diretorio

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`) //aqui estou acessando a pasta que eu quiser mais o arquivo que eu estou enviando
})

app.listen(port, () => {
    console.log(`O app está rodando corretamente na porta: ${port}`)
})
const http = require('http')
const port = 3000

//com o http craimos o server e alteramos a resposta com base na url acessada
//com a url processamos os parametros vindos da query string para alterar a logica do http
const server = http.createServer((req, res) => {
    const urlInfo = require('url').parse(req.url, true) //o que está feito aqui é basicamente pegando a url que vem da requisição e o parametro true é para que seja possível realizar esse exemplo
    const name = urlInfo.query.name //buscando o parametro nome
    res.statusCode = 200
    res.setHeader('Contenty-Type', 'text/html')

    if (!name) { //se nao vier nenhum nome, então pede para o usuário inserir
        res.end(
            '<h1>Preencha o seu nome:</h1><form method "GET"><input type="text" name="name"/><input type="submit" value="Enviar"/></form>'
            )
    } else { //aqui dará a resposta após a inserção
        res.end(
            `<h1>Seja bem-vindo ${name}!</h1`
            )
    }

})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})
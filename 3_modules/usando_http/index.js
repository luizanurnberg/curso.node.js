const http = require('http')
//definir a porta
const port = 3000

//cria o servidor e usa uma arrow function com os parametros de requisicao e resposta
//ao enviar uma requisicao, recebe a resposta definida, nesse caso, um Hello World
//se da um res.end() para finaliza, se nao fica rodando eternamente 
const server = http.createServer((req, res) =>{
    res.write('Hello World')
    res.end()
})

//aqui serve para definir em qual porta isso estará acessível, coloquei uma funcao de callback para dizer que está rodando, mas isso é opcional 
server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})

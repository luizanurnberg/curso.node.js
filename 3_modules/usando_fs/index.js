const http = require('http')
const port = 3000
const fs = require('fs')


const server = http.createServer((req, res) =>{
    fs.readFile('mensagem.html', function(err, data) { //colocando como parametro o conteudo do arquivo e erro caso aconteça
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(data)   
    return res.end()
    })
})

server.listen(port, () =>{
    console.log(`Servidor rodando na porta: ${port}`)
})
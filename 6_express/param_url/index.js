const express = require('express')
const app = express()
const port = 3000
const path = require('path')

const basePath = path.join(__dirname, 'templates') //aqui estou acessando o diretorio

app.get('/users/:id', (req, res) => {
    const id = req.params.id
    //em uma aplicação mais avançada, o sistema iria ler uma tabela users e resgatar o usuário do banco de dados
    console.log(`Estamos buscando pelo usuário: ${id}`)
    res.sendFile(`${basePath}/users.html`) //aqui estou acessando a pasta que eu quiser mais o arquivo que eu estou enviando
})


app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`) //aqui estou acessando a pasta que eu quiser mais o arquivo que eu estou enviando
})

app.listen(port, () => {
    console.log(`O app está rodando corretamente na porta: ${port}`)
})
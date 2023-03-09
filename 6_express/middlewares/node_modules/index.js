const express = require('express')
const app = express()
const port = 3000
const path = require('path')

const basePath = path.join(__dirname, 'templates') //aqui estou acessando o diretorio

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`) //aqui estou acessando a pasta que eu quiser mais o arquivo que eu estou enviando
})

app.listen(port, () => {
    console.log(`O app está rodando corretamente na porta: ${port}`)
})
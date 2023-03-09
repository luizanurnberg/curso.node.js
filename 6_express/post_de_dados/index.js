const { json } = require('express')
const express = require('express')
const app = express()
const port = 3000
const path = require('path')

const basePath = path.join(__dirname, 'templates') //aqui estou acessando o diretorio

app.use( 
    express.urlencoded({ //vai ler o corpo da requisição e transformá-la em um objeto javaScript
        extended: true
    })
)

app.use(express.json())

app.get('/users/add', (req, res) => {
    res.sendFile(`${basePath}/userForm.html`)
})

app.post('/users/save', (req, res) => {
    console.log(req.body)
    const name = req.body.name
    const age = req.body.age
    console.log(`O nome do usuário é ${name} e ele tem ${age} anos`)
    res.sendFile(`${basePath}/userForm.html`) //para ele mandar e depois rotarnar ao inicial, se não fica dando mensagem "this site can´t be reached"
})

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


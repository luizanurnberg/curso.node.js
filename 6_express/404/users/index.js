const express = require('express')
const router = express.Router()
const path = require('path')
const basePath = path.join(__dirname, '../templates') //aqui estou acessando o diretorio

router.get('/add', (req, res) => { //tirei o /users porque ele ja foi mostrado para o sistema no outro index.js, daí quando fosse acessar a aplicação se tivesse aquele aqui iria ficar /users/users..etc
    res.sendFile(`${basePath}/userForm.html`)
})

router.post('/save', (req, res) => {
    console.log(req.body)
    const name = req.body.name
    const age = req.body.age
    console.log(`O nome do usuário é ${name} e ele tem ${age} anos`)
    res.sendFile(`${basePath}/userForm.html`) //para ele mandar e depois rotarnar ao inicial, se não fica dando mensagem "this site can´t be reached"
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    //em uma aplicação mais avançada, o sistema iria ler uma tabela users e resgatar o usuário do banco de dados
    console.log(`Estamos buscando pelo usuário: ${id}`)
    res.sendFile(`${basePath}/users.html`) //aqui estou acessando a pasta que eu quiser mais o arquivo que eu estou enviando
})

module.exports = router

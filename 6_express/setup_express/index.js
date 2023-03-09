const express = require('express')
const app = express()
const port = 3000

//nada mais é do que o usuário acessar a rota principal e com essa requisição mandamos a resposta 
app.get('/', (req, res) => {
    res.send('Hello, World!')
})

app.listen(port, () => {
    console.log(`App está rodando na porta: ${port}`)
})
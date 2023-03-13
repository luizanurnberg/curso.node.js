const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
//precisa disso para funcionar
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home', { layout: false })
})

app.listen(3000, () => {
    console.log('A aplicação está rodando')
})
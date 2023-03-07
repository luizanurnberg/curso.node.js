const url = require('url')
const adress = 'https://www.mywebsite.com/catalog?product=table'
const parseUrl = new url.URL(adress) //instanciar uma nova URL utilizando aquela que definimos no adress

console.log(parseUrl.host)
console.log(parseUrl.pathname)
console.log(parseUrl.search)
console.log(parseUrl.searchParams)
console.log(parseUrl.searchParams.get('product'))
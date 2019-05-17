const express = require('express')
const pug = require('pug')
const bodyParser = require('body-parser')
const app = express()
const utils = require('./controllers/functions.js')
let port = process.env.PORT

// Set views, static folder, body parser
app.set('view engine','pug')
app.use('/assets',express.static('./public'))
app.use(bodyParser.urlencoded({ extended: false }))

// Set routes
app.get('/', (req, rep) => {
  rep.render('index')
})

app.post('/', (req, rep) => {
  let nb = parseInt(req.body.nbfactors)
  if (!req.body.serie) rep.render('index', {serie:"You have to enter values",result:0,chain:0,nb:nb})
  else {
  let serie = req.body.serie.toString()
  let result = utils.highestAdjacent(serie,nb)
  rep.render('index', {serie:serie,result:result.prod,chain:result.num,nb:nb})
  }
})

app.get('*', (req, rep) => {
  rep.render('404')
})

if (port == null || port == "") {
  port = 8000
}
app.listen(port)

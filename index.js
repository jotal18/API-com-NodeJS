const express = require('express')
const bodyParser = require('body-parser')

const adaptador = require('./src/routes/adaptador_routes')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/adaptador', adaptador)

 app.listen(3000)
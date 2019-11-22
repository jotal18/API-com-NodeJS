const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const router = require('./src/routes/adaptador_routes')
const expbs = require('express-handlebars')
const helpers = require('./src/helpers/pagination')

const app = express()

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// configuração handlebars
const hbs = expbs.create({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'src/views/layouts'),
    partialsDir: path.join(__dirname, 'src/views/partials'),
    extname: '.hbs',
    helpers: helpers 
})

app.set('views', path.join(__dirname, 'src/views'))
app.engine('.hbs', hbs.engine)
app.set("view engine", ".hbs");

app.use('/adaptador', router)

app.listen(8888)
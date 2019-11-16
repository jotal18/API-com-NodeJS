const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const router = require('./src/routes/adaptador_routes')
const exphbs = require('express-handlebars')

const app = express()

app.use(express.static(__dirname + '/public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// configuração handlebars
app.set("view engine", ".hbs");
app.set('views', path.join(__dirname, './src/views'))
app.engine('hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));

app.use('/adaptador', router)

app.listen(8888)
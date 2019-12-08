const express = require('express')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const path = require('path')
const router = require('./src/routes/adaptador_routes')
const {hbs} = require('./src/config/handlebars')

const app = express()

app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(express.static('src'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.set('views', path.join(__dirname, 'src/views'))
app.engine('.hbs', hbs.engine)
app.set("view engine", ".hbs");

app.use('/', router)

app.listen(3000)
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const router = require('./src/routes/adaptador_routes')
const expbs = require('express-handlebars')

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
    helpers: {
        pagination: function (paginaAtual, totalPaginas, totalButtons) {
            // console.log(paginaAtual)
            let setaEsquerdaStatus = (paginaAtual == 1) ? "disabled" : "waves-effect"
            let setaDireitaStatus = (paginaAtual == totalPaginas) ? "disabled" : "waves-effect"
            var setaEsquerdaAnterior = (setaEsquerdaStatus == "waves-effect") 
                ? `"/adaptador/?page=${paginaAtual - 1}"` : `"/adaptador/?page=${paginaAtual}"`
            let setaDireitaPosterior = (setaDireitaStatus == "waves-effect") 
                ? `"/adaptador/?page=${parseInt(paginaAtual) + 1}"` : `"/adaptador/?page=${paginaAtual}"`

            let text = '<ul class="pagination">'
            text += `<li class=${setaEsquerdaStatus}>
                        <a href=${setaEsquerdaAnterior}><i class="material-icons">chevron_left</i></a>
                    </li>`
            
            for (let pag = 1; pag <= totalButtons; pag++) {
                let paginaAtiva = (paginaAtual == pag) ? "disabled" : "waves-effect"
                text += `<li class="${paginaAtiva}"><a href="/adaptador/?page=${pag}">${pag}</a></li>`
            }
            
            text += `<li class=${setaDireitaStatus}>
                        <a href=${setaDireitaPosterior}><i class="material-icons">chevron_right</i></a>
                    </li>`
            text += '</ul>'
            return text
            // return console.log(paginaAtual, setaEsquerdaAnterior)
            // <li class="waves-effect"><a href="/adaptador/page=2">2</a></li>
            // <li class="waves-effect"><a href="/adaptador/page=3">3</a></li>
            // <li class="waves-effect"><a href="#!">4</a></li>
            // <li class="waves-effect"><a href="#!">5</a></li>
            
        }
    }
})
app.set('views', path.join(__dirname, 'src/views'))
app.engine('.hbs', hbs.engine)
app.set("view engine", ".hbs");

app.use('/adaptador', router)

app.listen(8888)
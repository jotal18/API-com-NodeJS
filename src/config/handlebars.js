const expbs = require('express-handlebars')
const path = require('path')
// const helperPagination = require('../helpers/pagination')
// const helperFormattedDate = require('../helpers/formattedDate')
const helpers = require('../helpers/handlebars')

exports.hbs = expbs.create({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, '../views/layouts'),
    partialsDir: path.join(__dirname, '../views/partials'),
    extname: '.hbs',
    helpers
})
const Sequelize = require('sequelize')
const AdaptadorModel = require('./src/model/Adaptador')

const {database, username, password, host, dialect} = require('./src/config/database')
const sequelize = new Sequelize(database, username, password, {
    host,
    dialect,
    dialectOptions: {
        dateStrings: true,
        typeCast: true,
        useUTC: false
    },
    timezone: '-3:00'
})

// sequelize.authenticate().then(()=>{
//     console.log('Conexão estabelecida com sucesso!!')
// }).catch(err => {
//     console.log('Erro ao estabelecer a conexão', err)
// })

const a = async () => {
    try {
        await sequelize.authenticate()
        console.log('Conexão estabelecida com sucesso!!')
    } catch (error) {
        console.log('Erro ao estabelecer a conexão', error)
    }
}

a()

const Adaptador = AdaptadorModel(sequelize, Sequelize)

module.exports = {Adaptador, sequelize, Sequelize}

// sequelize.sync({force: true})
// sequelize.drop()

/*
const Sequelize = require('sequelize') 
const UserModel = require('./models/user') 
const BlogModel = require('./models/blog') 
const TagModel = require('./models/tag') 
const sequelize = new Sequelize('codementor', 'root', 'root', { host: 'localhost', 
    dialect: 'mysql', 
    pool: { max: 10, min: 0, acquire: 30000, idle: 10000 } 
}) 
const User = UserModel(sequelize, Sequelize) 
// BlogTag will be our way of tracking relationship between Blog and Tag models 
// each Blog can have multiple tags and each Tag can have multiple blogs 
const BlogTag = sequelize.define('blog_tag', {}) 
const Blog = BlogModel(sequelize, Sequelize) 
const Tag = TagModel(sequelize, Sequelize) 
Blog.belongsToMany(Tag, { through: BlogTag, unique: false }) 
Tag.belongsToMany(Blog, { through: BlogTag, unique: false }) 
Blog.belongsTo(User); 
sequelize.sync({ force: true }).then(() => { console.log(`Database & tables created!`)}) 

module.exports = { User, Blog, Tag } 
*/
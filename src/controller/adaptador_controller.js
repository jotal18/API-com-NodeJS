const {Adaptador} = require('../../sequelize')

module.exports = {

    async index (req, res) {   
      const adaptador = await Adaptador.findAll({offset: 0, limit: 5})
      // return res.json(adaptador)
      return res.render('home', {adaptador})
    },

    async pagination(req, res) {
        const page = req.params.page
        const limit = 5 
        const skipPage = (limit * page) - limit
        let count = Adaptador.count()
        let pageRender = Math.ceil(await Adaptador.count()/limit)
        if(page > pageRender)
          return res.send('Rota não existe!!!')
        const adaptador = await Adaptador.findAll({offset: skipPage, limit})
        // return res.json(adaptador)
        return res.render('home', {adaptador})
    },

    cadastro (req, res) {
      // const adaptador = Adaptador.findAll()
      return res.send('Cadastro')
    },

    async store (req,res) {

      // const adaptador = await Adaptador.create({
      //     nome: 'teste',
      //     matricula: 1991885,
      //     setor: 'shit',
      //     data: 2019-11-01,
      //     observacao: 'Hancock1'
      //   })
      try {
        const adaptador = await Adaptador.create(req.body)
        return res.json(adaptador)  
      } catch (error) {
        return res.status(400).send({error: error})
      } 
    }, 

    async show (req, res) {
      try {
        const adaptador = await Adaptador.findByPk(req.params.id)

        if (adaptador === null) 
          return res.send('rota não existe!!')
        
        return res.json(adaptador)  
      } catch (error) {
        return res.status(400).send({error: error})
      }
    },

    async update (req, res) {
      try {
        const adaptador = await Adaptador.update(req.body, {
          where: {
            id: req.params.id
          }
        })
        
        if (adaptador[0] === 0) 
          return res.send('rota não existe')
    
        return res.json(adaptador)
      } catch (error) {
          return res.status(400).send({error: error})
      }
    },

    async delete (req, res) {
      try {
        const adaptador = await Adaptador.destroy({
          where: {
            id: req.params.id
          }
        })
        
        if(adaptador === 0)
          return res.send('Rota não encontrada!!!')
    
        return res.send('Registro deletado com sucesso!!!')
      } catch (error) {
        return res.send(err)
      }
    }
};
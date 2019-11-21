const {Adaptador} = require('../../sequelize')

module.exports = {

    async index (req, res) {   
      const pages = {
        page: req.query.page || 1,
        limit: 5, 
        skipPage: function () {
          return (this.limit * this.page) - this.limit
        },
        countRegister: await Adaptador.count(),
        pageRender: function () {
          return Math.ceil(this.countRegister/this.limit)
        },
        numberButtons: 8
      }
      
      if(pages.page > pages.pageRender)
        return res.send('Rota não existe!!!')
      const adaptador = await Adaptador.findAll({offset: pages.skipPage(), 
        limit: pages.limit})
      return res.render('home', {adaptador, 
        paginaAtual: pages.page, 
        totalPaginas: pages.pageRender(),
        totalButtons: pages.numberButtons
      })

    },

    cadastro (req, res) {
      return res.send('Cadastro')
    },

    async store (req,res) {

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
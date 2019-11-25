const {Adaptador} = require('../../sequelize')

module.exports = {

    async index (req, res) {   
      const pageCurrent = req.query.page || 1
      const limit =  6
      const offset = (limit * pageCurrent) - limit
      const countRegister = await Adaptador.count()
      const totalPages = Math.ceil(countRegister/limit)
      const totalButtons =  4
      
      if(pageCurrent > totalPages) return res.send('Rota não existe!!!')

      const adaptador = await Adaptador.findAll({offset, limit})

      return res.render('home', {adaptador, pageCurrent, totalPages, totalButtons})
    },

    cadastro (req, res) {
      return res.render('create')
    },

    async store (req,res) {
      try {
        const{nome, setor, matricula, observacao, data} = req.body
        return res.send(data)
        // const adaptador = await Adaptador.create(req.body)
        // return res.redirect('/adaptador')  
      } catch (error) {
        return res.status(400).send({error: error})
      } 
    }, 

    async show (req, res) {
      try {
        const adaptador = await Adaptador.findByPk(req.params.id)

        if (adaptador === null) 
          return res.send('rota não existe!!')
        
        return res.render('edit', {adaptador})  
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
    
        return res.redirect('/adaptador')
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
    
        // return res.send('Registro deletado com sucesso!!!')
        return res.redirect('/adaptador')
      } catch (error) {
        return res.send(err)
      }
    }
};
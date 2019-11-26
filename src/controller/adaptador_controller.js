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
        let data_formatada = new Date(Date.parse(data))
        // return res.send(d)
        // const adaptador = await Adaptador.create(req.body)
        const adaptador = await Adaptador.create({nome, setor, matricula, observacao, data: data_formatada})
        return res.redirect('/adaptador') 
      } catch (error) {
        return res.status(400).send({error: error})
      } 
    }, 

    async show (req, res) {
      try {
        // // const {nome, matricula, setor, observacao, data} = await Adaptador.findByPk(req.params.id)
        const adaptador = await Adaptador.findByPk(req.params.id)

        if (adaptador === null) return res.send('rota não existe!!')

        let dia = adaptador.data.substr(8,2)
        let mes = adaptador.data.substr(5,2)
        let ano = adaptador.data.substr(0,4)
        let data_formatada = `${dia}/${mes}/${ano}`

        return res.render('edit', {adaptador: {id: adaptador.id, nome: adaptador.nome, setor: adaptador.setor, matricula: adaptador.matricula, observacao: adaptador.observacao, data: data_formatada}})  
        // return res.render('edit', {teste: {cama: 'teste', sofa: 'teste1'}})  
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
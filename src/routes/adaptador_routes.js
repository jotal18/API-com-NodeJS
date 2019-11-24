const express = require('express')
const router = express.Router()
const adaptador_controller = require('./../controller/adaptador_controller')

router.get('/adaptador', adaptador_controller.index)
router.get('/adaptador/cadastro', adaptador_controller.cadastro)
router.post('/adaptador', adaptador_controller.store)
router.get('/adaptador/:id', adaptador_controller.show)
router.put('/adaptador/:id', adaptador_controller.update)
router.delete('/adaptador/:id', adaptador_controller.delete)

module.exports = router
const express = require('express')
const router = express.Router()
const adaptador_controller = require('../controller/adaptador_controller')

router.get('/', adaptador_controller.index)
router.get('/:page', adaptador_controller.pagination)
router.get('/create', adaptador_controller.cadastro)
router.post('/create', adaptador_controller.store)
router.get('/show/:id', adaptador_controller.show)
router.put('/update/:id', adaptador_controller.update)
router.delete('/delete/:id', adaptador_controller.delete)
    
 module.exports = router
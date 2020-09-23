const express = require('express')
const router = express.Router()
// Controladores
const { renderIndex, renderAbout, subscribeNewsletter } = require('../controllers/index.controller')



router.get('/', renderIndex )
router.get('/about', renderAbout )
router.post('/newsletter', subscribeNewsletter)


module.exports = router


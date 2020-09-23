const express = require('express')
const router = express.Router()

const { renderAddCoach, addCoach, upload, renderValorant, renderLeague } = require('../controllers/coachs.controller')

router.get('/addcoach' , renderAddCoach)
router.post('/addcoach' , addCoach)
router.post('/upload' , upload)
router.get('/coachs/valorant', renderValorant)
router.get('/coachs/league', renderLeague)




module.exports = router
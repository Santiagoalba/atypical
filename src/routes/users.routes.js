// Express router
// const express = require('express')
// const router = express.Router()
const router = require("express").Router();
// Controladores
const { signup, login, logout, renderMyInfo, deleteAcc } = require('../controllers/users.controller')

// Rutas

const { isAuthenticated } = require('../helpers/auth')

router.post('/signup', signup)

router.post('/login', login)

router.get('/logout', logout)

router.get('/my-info', isAuthenticated, renderMyInfo)

router.delete('/deleteAcc/:id', deleteAcc)



//Export
module.exports = router

// Express router
// const express = require('express')
// const router = express.Router()
const router = require("express").Router();
// Controladores
const { signup,
        login,
        logout,
        renderMyInfo,
        deleteAcc,
        renderUpdateAcc,
        updateAcc,
     } = require('../controllers/users.controller')

// Rutas

const { isAuthenticated } = require('../helpers/auth')

router.post('/signup', signup)

router.post('/login', login)

router.get('/logout', isAuthenticated, logout)

router.get('/my-info', isAuthenticated, renderMyInfo)

router.get('/updateAcc', isAuthenticated, renderUpdateAcc)

router.put('/updateAcc', isAuthenticated, updateAcc)

router.delete('/deleteAcc/:id', isAuthenticated, deleteAcc)



//Export
module.exports = router

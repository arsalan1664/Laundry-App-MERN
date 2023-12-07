const { Login, Register } = require('../controller/authController');
const express = require('express');
const Router = express.Router()


Router.post('/register', Register)
Router.post('/login', Login)

module.exports = Router;

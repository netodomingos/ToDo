const express = require('express')

const UserController = require('./Controllers/UserController')
const SessionController = require('./Controllers/SessionController')
const TodoController = require('./Controllers/TodoController')

const routes = express.Router()

routes.post('/user', UserController.store)

routes.post('/session', SessionController.login)

routes.get('/todo/:token', TodoController.index)
routes.post('/todo', TodoController.store)
routes.delete('/todo/:token/:id', TodoController.delete)


module.exports = routes
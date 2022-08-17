const { Router } = require('express')
const express = require('express')
const Routes = express.Router()
const controller = require('../controllers/controller')
const userController = require('../controllers/userController')
const dashboard = require('../controllers/dashboard')
const auth = require('../middlewares/auth')




Routes.get('/', controller.Home)
Routes.get('/games', controller.Game)


// login
Routes.get('/login',auth.loginAuth, controller.loginView)
Routes.post('/login', userController.login)


// register
Routes.post('/register', userController.Register)
Routes.get('/register', controller.RegisterView)


// games Score 
Routes.post('/games',controller.GameHistory)
Routes.get('/games/score/:id', controller.getScore)
Routes.get('/404', (req, res) => {
     res.render('404')
})


// dashboard
Routes.post('/super-user', auth.verifyToken)
Routes.get('/super-user',dashboard.superView1)
Routes.get('/super-user/api',dashboard.superView)

Routes.post('/super-user/:id', dashboard.userUpdate)
Routes.get('/remove/:id', dashboard.deleteUser)
Routes.get('/user-profile/:id', dashboard.profileUser)
Routes.post('/user-profile/:id', dashboard.updateProfile)

Routes.get('/game-room',controller.gameRoom)



module.exports = Routes


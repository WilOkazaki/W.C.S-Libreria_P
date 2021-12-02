const express = require('express')
const router = express.Router()

const authController = require ('../controllers/authController')

// Router para vistas 

router.get('/', (req, res) =>{
	res.render('index')
})

router.get('/login', (req, res) =>{
	res.render('login', {alert:false})
})

router.get('/login_usu', (req, res) =>{
	res.render('login_usu', {alert:false})
})

router.get('/registro', (req, res) =>{
	res.render('registro', {alert:false})
})

router.get('/principal_usu', authController.isAuth, (req, res) =>{
	res.render('principal_usu', {usuario:req.usuario})
})

router.get('/principal', authController.isAdmin, (req, res) =>{
	res.render('principal', {usuario:req.usuario})
})


//Router para controles
router.post('/registro', authController.registro)
router.post('/login', authController.login)
router.post('/login_usu', authController.login_usu)
router.get('/logout', authController.logout)

module.exports = router
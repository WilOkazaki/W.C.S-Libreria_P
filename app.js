const express = require('express')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const { Store } = require('express-session')

const app = express()

//motor de plantillas
app.set('view engine', 'ejs')

//public archivos estaticos
app.use(express.static('public'))

//datos enviados desde forms
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//variables de entorno
dotenv.config({path: './env/.env'})

// trabajar con el cookies
app.use(cookieParser())
 
//llamado al router
app.use('/', require('./routes/router'))
app.use('/', require('./routes/routerLibros'))

app.use(function (req, res, next){
	if(!req.usuario)
	res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
	next();
}); 

app.listen(8000, () =>{
	console.log('Servidor activo en el puerto:', 8000)
}) 


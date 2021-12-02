const jwt = require ('jsonwebtoken');
const bcryptjs = require ('bcryptjs');
const conexion = require('../database/db');
const {promisify} = require ('util');



// Procedimiento para el registro

exports.registro = async (req, res) => {
    try {
        const { nombre, usuario, contraseña } = req.body;
        let contraseñaHash = await bcryptjs.hash(contraseña, 8)
        if (!nombre || !usuario || !contraseña) {
            res.render('registro', {
                alert: true,
                alertTitle: "Advertencia",
                alertMessage: "Los datos solicitados son necesarios",
                alertIcon: "info",
                showConfirmButton: true,
                timer: false,
                ruta: 'registro'
            }) 
        }else{
            conexion.query('INSERT INTO registros SET?', {nombre:nombre, usuario:usuario, contraseña:contraseñaHash}, (error, results)=>{
                if(error){console.log(error)}
                res.redirect('/login_usu')
            }) 
        } 
    } catch (error) {
        console.log(error)
    } 
} 

 // Procedimiento del login para el administrador
exports.login = async (req, res) => {
    try{
    const usuario = req.body.usuario;
    const contraseña = req.body.contraseña;
        if(!usuario || !contraseña){
            res.render('login', {
                alert: true,
                alertTitle: "Advertencia",
                alertMessage: "Ingrese Usuario y contraseña",
                alertIcon: "info",
                showConfirmButton: true,
                timer: false,
                ruta: 'login'
            }) 
        }else{
                
            conexion.query('SELECT * FROM administrador WHERE usuario = ?', [usuario], async (error, results)=>{
                if(results.length == 0 || !   (await bcryptjs.compare(contraseña, results[0].contraseña))){
                    res.render('login', {
                        alert: true,
                        alertTitle: "Error",
                        alertMessage: "Usuario y/o constraseña incorrecta",
                        alertIcon: "info",
                        showConfirmButton: true,
                        timer: false,
                        ruta: 'login'
                    })
                }else {

               // el inicio de seccion esta validado
                const id= results[0].id
                const token = jwt.sign({id:  id}, process.env.JWT_SECRETO, {
                    expiresIn: process.env.JWT_TIEMPO_EXPIRA
                })   

                console.log("TOKEN: "+token+" para el USUARIO : "+usuario)
                const cookiesOptions = {
                    expires: new Date(Date.now()+process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                    httpOnly: true
                }
                res.cookie("jwt", token, cookiesOptions)
                res.render('login', {
                    alert: true,
                    alertTitle: "Conexion exitosa",
                    alertMessage: "LOGIN CORRECTO",
                    alertIcon: "success",
                    showConfirmButton: false,
                    timer: 800,
                    ruta: 'principal'
                })
                
            }
        
        }) 
    } 

    }catch(error) {
        console.log(error) }
}

// Procedimiento  del login usuario
exports.login_usu = async (req, res) => {
    try{
    const usuario = req.body.usuario;
    const contraseña = req.body.contraseña;
        if(!usuario || !contraseña){
            res.render('login_usu', {
                alert: true,
                alertTitle: "Advertencia",
                alertMessage: "Ingrese Usuario y contraseña",
                alertIcon: "info",
                showConfirmButton: true,
                timer: false,
                ruta: 'login_usu'
            }) 
        }else{
                
            conexion.query('SELECT * FROM registros WHERE usuario = ?', [usuario], async (error, results)=>{
                if(results.length == 0 || !   (await bcryptjs.compare(contraseña, results[0].contraseña))){
                    res.render('login_usu', {
                        alert: true,
                        alertTitle: "Error",
                        alertMessage: "Usuario y/o constraseña incorrecta",
                        alertIcon: "info",
                        showConfirmButton: true,
                        timer: false,
                        ruta: 'login_usu'
                    })
                }else {

               // el inicio de seccion esta validado
                const id= results[0].id
                const token = jwt.sign({id:  id}, process.env.JWT_SECRETO, {
                    expiresIn: process.env.JWT_TIEMPO_EXPIRA
                })   

                console.log("TOKEN: "+token+" para el USUARIO : "+usuario)
                const cookiesOptions = {
                    expires: new Date(Date.now()+process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                    httpOnly: true
                }
                res.cookie("jwt", token, cookiesOptions)
                res.render('login_usu', {
                    alert: true,
                    alertTitle: "Conexion exitosa",
                    alertMessage: "LOGIN CORRECTO",
                    alertIcon: "success",
                    showConfirmButton: false,
                    timer: 800,
                    ruta: 'principal_usu'
                })
                
            }
        
        }) 
    } 

    }catch(error) {
        console.log(error) }
}

// Procedimiento de autentificacion del usuario
exports.isAuth = async(req, res, next) =>{
    if(req.cookies.jwt){
        try {
            const decodificada = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRETO)
            conexion.query('SELECT * FROM registros WHERE id= ?', [decodificada.id], (error, results) =>{
                if(!results){return next()}
                req.usuario = results[0]
                return next()
            }) 
            
        } catch (error) {
            console.log(error)
            return next( )
        }

    }else {
        res.redirect('/login_usu')
        
    }
}

// Procedimiento de autentificacion del administrador
exports.isAdmin = async(req, res, next) =>{
    if(req.cookies.jwt){
        try {
            const decodificada = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRETO)
            conexion.query('SELECT * FROM administrador WHERE id= ?', [decodificada.id], (error, results) =>{
                if(!results){return next()}
                req.usuario = results[0]
                return next()
            }) 
            
        } catch (error) {
            console.log(error)
            return next( )
        }

    }else {
        res.redirect('/login')
        
    }
}

exports.logout = (req, res) =>{
    res.clearCookie('jwt')
    return res.redirect ('/')
}




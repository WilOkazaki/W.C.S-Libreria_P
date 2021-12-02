const express = require('express')
const router = express.Router()

const conexion = require('../database/db')
const authController = require ('../controllers/authController')
const LibrosController = require('../controllers/LibrosController');

//muestra libros para el admin
router.get('/libros', authController.isAuth, (req, res) => {
	
	conexion.query('SELECT * FROM Libros', (error, results) => {
		if(error){
			throw error;
		}else{
			res.render('librosIndex', {results: results});
		}
	})	
})

//muestra libros para los usuarios
router.get('/libros_usu', authController.isAuth, (req, res) => {
	
	conexion.query('SELECT * FROM Libros', (error, results) => {
		if(error){
			throw error;
		}else{
			res.render('libros_usu', {results: results});
		}
	})	
})

//para el uso de datatables y ajax
router.get('/libros/data', authController.isAuth, (req, res)=>{     
    conexion.query('SELECT * FROM libros',(error, results)=>{
        if(error){
            throw error;
        } else {                                                   
            data = JSON.stringify(results);
            res.send(data);          
        }   
    })
})

//crear o añadir libros
router.get('/crear', authController.isAuth, (req, res) =>{
	res.render('crear');
})

//editar libros
router.get('/editar/:id', authController.isAuth, (req,res)=>{    
    const id = req.params.id;
    conexion.query('SELECT * FROM libros WHERE id=?',[id] , (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('editar.ejs', {titulo:results[0]});            
        }        
    });
});

//eliminar libros
router.get('/eliminar/:id', authController.isAuth, (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM libros WHERE id = ?',[id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/libros');         
        }
    })
});

router.post('/save', LibrosController.save)
router.post('/update', LibrosController.update);

module.exports = router;
const conexion = require('../database/db');

//Guardar libros
exports.save = (req, res) =>{
	const titulo = req.body.titulo;
	const autor = req.body.autor;
	const area = req.body.area;
	const imgURL = req.body.imgURL;

	conexion.query('INSERT INTO libros SET ?', {titulo:titulo, autor:autor, area:area, imgURL:imgURL}, (error, results) =>{
		if(error){
			throw error;
		}else{
			res.redirect('/libros');
		}
	})	
	console.log(titulo+"-"+autor+"-"+area+"-"+imgURL) 
}

//Editar o actualizar libros
exports.update = (req, res)=>{
    const id = req.body.id;
    const titulo = req.body.titulo;
    const autor = req.body.autor;
	const area = req.body.area;
	const imgURL = req.body.imgURL;
    conexion.query('UPDATE libros SET ? WHERE id = ?',[{titulo:titulo, autor:autor, area:area, imgURL:imgURL}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/libros');         
        }
});
}; 
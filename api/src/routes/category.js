const server = require('express').Router();
const { Category ,Product } = require('../db.js');


/////////// READ ///////////

//Mostramos todas las categorías
server.get('/', async(req, res, next) => {
    await Category.findAll()
        .then(categories => {
            res.json(categories);
        })
        .catch(err => {
            res.status(404).json({message: "No se encontraron categorias" , error: err})
        });
});

//Devuelve TODOS LOS PRODUCTOS de una categoria
server.get('/filter/:id' ,async (req,res)=>{
    await Category.findAll({
        where: {
            categoryID: req.params.id
        },
        include: Product
    })
    .then(category => {
        res.json(category);
    })
    .catch(err => {
        res.status(404).json({message: "No se encontraron categorias" , error: err})
    });
})

//Buscamos una categoría por ID
server.get('/:categoryID',async (req, res, next) => {
    await Category.findByPk(req.params.categoryID)
        .then(category => {
            res.send(category)
        })
        .catch(err => {
            res.status(404).json({message: "No se encontro la categoria requerida" , error: err})
        });
});

//Mostramos las categorias que coincidan con el nombre pasado como parametro en la URL
server.get('/buscar/:nombreCat',async (req, res, next) => {
    const nombreCat = req.params.nombreCat;

    await Category.findAll({
        where: {
            name: nombreCat
        }
    })
        .then(categories => {
            res.json(categories);
        })
        .catch(err => {
            res.status(404).json({message: "No se encontraron categorias" , error: err})
        });
});

/////////// CREATE ///////////

//Creamos una nueva categoría con los parametros recibidos por el body
server.post('/', async(req, res, next) => {
    const { name, description ,img } = req.body;
    await Category.create({ name, description, img })
        .then(categoria => {
            res.status(201).json(categoria)
        })
        .catch(err => {
            res.status(404).json({message: "No se pudo crear la categoria" , error: err})
        });
});

/////////// DELETE ///////////

//Borramos una categoría por ID--> categoryID
server.delete('/:id',async (req, res, next) => {
    await Category.destroy({
        where: {
            categoryID: req.params.id
        }
    })
        .then(() => {
            res.json("Done");
        })
        .catch(err => {
            res.status(404).json({message: "No se pudo borrar la categoria" , error: err})
        });
});

/////////// UPDATE ///////////

//Actualizamos los datos de una categoría, se actualizan los datos el front se encarga de que los datos
//nos lleguen de manera correcta.
server.put('/:id',async (req, res, next) => {
    // Los valores modificados se sacaran del body mas adelante
    const { name, description } = req.body;
    await Category.update({
        name: name,
        description: description
    }, {
        where: {
            categoryID: req.params.id
        }
    })
        .then(result => {
            //el update devuelve un array con la cantidad de filas afectadas.
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(404).json({message: "No se pudo actualizar los datos de la categoria" , error: err})
        });
});

module.exports = server
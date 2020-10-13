const server = require('express').Router();
const { Category ,Product } = require('../db.js');


/////////// READ ///////////

//Mostramos todas las categorías
server.get('/', (req, res, next) => {
    return Category.findAll()
        .then(categories => {
            res.json(categories);
        })
        .catch(err => {
            res.status(404, err)
        });
});

//Devuelve TODOS LOS PRODUCTOS de una categoria
server.get('/filter/:id' , (req,res)=>{
    return Category.findAll({
        where: {
            categoryID: req.params.id
        },
        include: Product
    })
    .then(category => {
        res.json(category);
    })
    .catch(err => {
        res.status(404, err)
    });
})

//Buscamos una categoría por ID
server.get('/:categoryID', (req, res, next) => {
    return Category.findByPk(req.params.categoryID)
        .then(category => {
            res.send(category)
        })
        .catch(err => {
            res.status(400, err)
        });
});

//Mostramos las categorias que coincidan con el nombre pasado como parametro en la URL
server.get('/buscar/:nombreCat', (req, res, next) => {
    const nombreCat = req.params.nombreCat;

    return Category.findAll({
        where: {
            name: nombreCat
        }
    })
        .then(categories => {
            res.json(categories);
        })
        .catch(err => {
            res.status(404, err)
        });
});

/////////// CREATE ///////////

//Creamos una nueva categoría con los parametros recibidos por el body
server.post('/', (req, res, next) => {
    const { name, description } = req.body;
    return Category.create({ name: name, description: description })
        .then(categoria => {
            res.status(201).json(categoria)
        })
        .catch(err => {
            res.status(404, err)
        });
});

/////////// DELETE ///////////

//Borramos una categoría por ID--> categoryID
server.delete('/:id', (req, res, next) => {
    Category.destroy({
        where: {
            categoryID: req.params.id
        }
    })
        .then(() => {
            res.json("Done");
        })
        .catch(err => {
            res.status(400, err)
        });
});

/////////// UPDATE ///////////

//Actualizamos los datos de una categoría, se actualizan los datos el front se encarga de que los datos
//nos lleguen de manera correcta.
server.put('/:id', (req, res, next) => {
    // Los valores modificados se sacaran del body mas adelante
    const { name, description } = req.body;
    Category.update({
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
            res.status(400, err)
        });
});

module.exports = server;
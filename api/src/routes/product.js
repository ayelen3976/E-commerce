const server = require('express').Router();
const { Product, Category } = require('../db.js');
const { Sequelize } = require('sequelize');

/////////// READ ///////////

//Buscamos y devolvemos todos los productos
server.get('/', (req, res, next) => {
    return Product.findAll()
        .then(products => {
            res.json(products);
        })
        .catch(err => {
            res.status(404, err)
        });
});

//Devuelve un producto y su categoria
server.get('/:id/category', (req, res, next) => {
    return Product.findOne({
        where: {
            id: req.params.id
        },
        include: Category
    })
    .then(products => {
        res.json(products);
    })
    .catch(err => {
        res.status(404, err)
    });
});


//Buscamos un producto por ID
server.get('/:id', (req, res, next) => {
    return Product.findByPk(req.params.id)
        .then(product => {
            res.send(product)        
        })
        .catch(err => {
            res.status(400,err)
        });
});

//Buscamos los productos que contengan la palabra pasada como query string en su name o en su description
server.get('/search', (req, res, next) => {
    const value = req.query.query;
    // console.log(req.query)
    // console.log(value)
    const Op = Sequelize.Op

    Product.findAll({
        where: {
            //or : [{name : value},{}]
            //substring %value% LIKE
            //[substring] : value 
            [Op.or]: [
                //opcion 1
                { name: { [Op.substring]: value } },
                //opcion 2
                { description: { [Op.substring]: value } }
            ]
        }
    })
        .then(productList => {
            res.json(productList)
        })
        .catch(err => {
            res.status(400, err)
        });
});

/////////// CREATE ///////////

//Creamos un nuevo producto
server.post('/', (req, res, next) => {
    const { name, description, stock, price } = req.body
    return Product.create({ name: name, description: description, stock: stock, price: price })
        .then(producto => {
            res.status(201).json(producto)
        })
        .catch(err => {
            res.status(404, err)
        });
});

//Seteado categorias a un producto
server.post('/:id/category/:categoryId', (req, res, next) => {
    const { id, categoryId } = req.params;
    let producto;
    Product.findByPk(id)
        .then(product =>{
            producto = product;
            return Category.findByPk(categoryId)
        })
        .then(category => {
            producto.setCategories(category)
        })
        .then(()=>{
            res.send("Agregada con exito")
        })
        .catch(err => {
            res.status(400,err)
        })
});

/////////// DELETE ///////////

//Borramos un producto de la lista en base al id pasado en la URL como parametro --> req.params
server.delete('/:id', (req, res, next) => {
    Product.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(() => {
        res.json("Done");
    })
    .catch(err => {
        res.status(400,err)
    })
});

//Borramos la categoria de un producto en particular, ambos pasado como parametros en la URL
server.delete('/:id/category/:categoryId', (req, res, next) => {
    const { id, categoryId } = req.params;
    let producto;
    Product.findByPk(id)
        .then(product =>{
            producto = product;
            return Category.findByPk(categoryId)
        })
        .then(category => {
            producto.removeCategories(category)
        })
        .then(()=>{
            res.send("Eliminada con exito con exito")
        })
        .catch(err => {
            res.status(400,err)
        })
});

/////////// UPDATE ///////////

//Actualizamos los datos de un producto el FRONT se encarga de que nos llegue todo de manera correcta
//la busqueda se realiza por id.
server.put('/:id', (req, res, next) => {
    // Los valores modificados se sacaran del body mas adelante
    const { name, price, stock, description, img } = req.body;
    Product.update({
        name: name,
        price: price,
        stock: stock,
        description: description,
        img: img
    }, {
        where: {
            id: req.params.id
        }
    })
    .then(result => {
        //el update devuelve un array con la cantidad de filas afectadas.
        res.status(200).json("done");
    })
    .catch(err => {
        res.status(400, err)
    });
});



module.exports = server;

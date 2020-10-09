const server = require('express').Router();
const { Product, Category } = require('../db.js');
const { Sequelize } = require('sequelize');

//READ

server.get('/', (req, res, next) => {
    return Product.findAll()
        .then(products => {
            res.json(products);
        })
        .catch(err => {
            res.status(404, err)
        });
});

server.get('/category', (req, res, next) => {
    return Category.findAll()
        .then(categories => {
            res.json(categories);
        })
        .catch(err => {
            res.status(404, err)
        });

});



server.get('/category/:nombreCat', (req, res, next) => {
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
        })
});

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
        })
})

//CREATE

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


server.post('/category', (req, res, next) => {
    const { name, description } = req.body;
    return Category.create({ name: name, description: description })
        .then(categoria => {
            res.status(201).json(categoria)
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
});

//DELETE

server.delete('/:id', (req, res, next) => {
    Product.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.json("Done");
    })
});


server.delete('/category/:id', (req, res, next) => {
    Category.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.json("Done");
    })

});

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
});

//UPDATE


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
    }).then(result => {
        //el update devuelve un array con la cantidad de filas afectadas.
        res.status(200).json(result);
    }).catch(err => {
        res.status(400, err)
    });
});

server.put('/category/:id', (req, res, next) => {
    // Los valores modificados se sacaran del body mas adelante
    const { name, description } = req.body;
    Category.update({
        name: name,
        description: description
    }, {
        where: {
            id: req.params.id
        }
    }).then(result => {
        //el update devuelve un array con la cantidad de filas afectadas.
        res.status(200).json(result);
    }).catch(err => {
        res.status(400, err)
    });
});

module.exports = server;

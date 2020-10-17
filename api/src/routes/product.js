const server = require('express').Router();
const { Product, Category } = require('../db.js');
const { Sequelize } = require('sequelize');

/////////// READ ///////////

//Buscamos y devolvemos todos los productos
server.get('/',async (req, res, next) => {
    await Product.findAll()
        .then(products => {
            res.json(products);
        })
        .catch(err => {
            res.status(404).json({message: "No se encontraron Productos" , error: err})
        });
});

//Buscamos y devolvemos todos los productos incluida la categoria
server.get('/include/category', async(req, res, next) => {
    await Product.findAll({
        include: Category
    })
    .then(products => {
        res.json(products);
    })
    .catch(err => {
        res.status(404).json({message: "No se encontraron Productos con categorias" , error: err})
    });
});

//Devuelve un producto y su categoria
server.get('/:id/category', async(req, res, next) => {
    await Product.findOne({
        where: {
            id: req.params.id
        },
        include: Category
    })
    .then(products => {
        res.json(products);
    })
    .catch(err => {
        res.status(404).json({message: "No se encontro el producto y su categoria" , error: err})
    });
});



//Buscamos los productos que contengan la palabra pasada como query string en su name o en su description
server.get('/search', async(req, res, next) => {
    const value = req.query.query;
    // console.log(req.query)
    // console.log(value)
    const Op = Sequelize.Op

    await Product.findAll({
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
            res.status(404).json({message: "No se encontraron Productos con esa palabra" , error: err})
        });
});

//Buscamos un producto por ID
server.get('/:id', async(req, res, next) => {
    await Product.findByPk(req.params.id)
        .then(product => {
            res.send(product)        
        })
        .catch(err => {
            res.status(404).json({message: "No se encontro el producto requerido" , error: err})
        });
});

/////////// CREATE ///////////

//Creamos un nuevo producto
server.post('/', async(req, res, next) => {
    const { name, description, stock, price, img } = req.body
    return await Product.create({ name: name, description: description, stock: stock, price: price, img:img })
        .then(producto => {
            res.status(201).json(producto)
        })
        .catch(err => {
            res.status(404).json({message: "No se pudo agregar el producto"})
        });
})

//Seteado categorias a un producto
server.post('/:id/category/:categoryId', async(req, res, next) => {
    const { id, categoryId } = req.params;
    let producto;
    await Product.findByPk(id)
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
            res.status(404).json({message: "No se pudo setear el producto a la categoria indicada" , error: err})
        })
});

/////////// DELETE ///////////

//Borramos la categoria de un producto en particular, ambos pasado como parametros en la URL
server.delete('/:id/category/:categoryId',async (req, res, next) => {
    const { id, categoryId } = req.params;
    let producto;
    await Product.findByPk(id)
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
            res.status(404).json({message: "No se pudo eliminar la categoria del producto" , error: err})
        })
});

//Borramos un producto de la lista en base al id pasado en la URL como parametro --> req.params
server.delete('/:id', async(req, res, next) => {
    await Product.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(() => {
        res.json("Done");
    })
    .catch(err => {
        res.status(404).json({message: "No se pudo borrar el producto" , error: err})
    })
});

/////////// UPDATE ///////////

//Actualizamos los datos de un producto el FRONT se encarga de que nos llegue todo de manera correcta
//la busqueda se realiza por id.
server.put('/:id', async(req, res, next) => {
    // Los valores modificados se sacaran del body mas adelante
    const { name, price, stock, description, img } = req.body;
    await Product.update({
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
    .then(res => {
        //el update devuelve un array con la cantidad de filas afectadas.
        res.status(200).json("done");
    })
    .catch(err => {
        res.status(404).json({message: "No se pudo actualizar el producto" , error: err})
    });
});



module.exports = server;
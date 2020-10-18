const server = require('express').Router();
const { response } = require('express');
const { User, Order, Product , Orderline } = require('../db.js');
// const { Sequelize } = require('sequelize');


////////////////////// READ ///////////////////
//Buscamos todos los usuarios
server.get('/', async (req, res, next) => {
    await User.findAll()
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            res.status(404).json({message: "No se encontraron Usuarios" , error: err})
        });
});

//Retorna Todas las ordenes de un usuario en particular
server.get('/:userId/order', async(req, res, next) => {
    const { userId } = req.params;
    // console.log(id)
    await Order.findAll({ where: { userId: userId } })
        .then(orderList=> {
            res.send(orderList)
        })
        .catch(err =>{
            res.status(404).json({message: "No se encontraron Ordenes para ese usuario" , error: err})
        })
});

//Ruta para traer todos los items de un carrito
server.get('/:userId/cart', async (req, res, next) => {
    const { userId } = req.params;
    await Order.findOne({ where: { userId: userId, estado: 'Carrito' } })
        .then(orden => {
            console.log(orden)
            Orderline.findAll({ where: { orderId: orden.dataValues.id} })
                .then(response => {
                    res.status(200).json(response)
                })
        })
        .catch(err =>{
            res.status(404).json({message: "No se encontraron Items" , error: err})
        });
});


//Buscamos los usuarios que contengan la palabra pasada como query string en su:
// userName, firstName, lastName ,email
server.get('/search',async (req, res, next) => {
    const value = req.query.query;
    const Op = Sequelize.Op

    await User.findAll({
        where: {
            //or : [{name : value},{}]
            //substring %value% LIKE
            //[substring] : value 
            [Op.or]: [
                //opcion 1
                { userName: { [Op.substring]: value } },
                //opcion 2
                { firstName: { [Op.substring]: value } },
                //opcion 3
                { lastName: { [Op.substring]: value } },
                //opcion 4
                { email: { [Op.substring]: value } }
            ]
        }
    })
        .then(userList => {
            res.json(userList)
        })
        .catch(err => {
            res.status(400).json({message: 'No se encontraron usuarios',error : err})
        });
});

//Nos trae solo el usuario cuyo id se pasa como parametro
server.get('/:id', async (req, res, next) => {
    await User.findByPk(req.params.id)
        .then(user => {
            res.send(user)        
        })
        .catch(err => {
            res.status(400).json({message: 'No se encontro el usuario',error : err})
        });
});

////////////////////// CREATE ///////////////////
//Creamos un usuario con los parametros recibidos por el body
server.post('/', async (req, res,next) => {
    const { userName, firstName, lastName, profilePic, description, email ,edad} = req.body;
    // console.log(req.body);
    return await User.create({userName,firstName,lastName,profilePic,description,email,edad})
        .then(user => {
            res.status(201).json(user)
        })
        .catch(err => {
            res.status(res.status(400).json({message: "Estas ingresando valores invalidos" ,error : err}))
        });
})




//Agregamos un producto al carrito de un usuario en particular
server.post('/:idUser/cart',async (req,res,next) =>{
    //El ID va a ser el ID del Producto 
    const {id , cantidad ,direccion,telefono} = req.body;
    const {idUser} = req.params;
    // console.log(id)
    // console.log(idUser)
    let user = await User.findByPk(idUser).catch(err=> res.status(400).json({message:"No se encontro el usuario," ,error:err}))
    let product = await Product.findByPk(id).catch(err=> res.status(400).json({message:"No se encontro el producto," ,error:err}))
    let order = await Order.findOrCreate(
        {
            where:{ 
                userId: user.dataValues.id, 
                estado: 'Carrito' 
            } ,
            defaults: {
                direccion,
                telefono,
                email: user.dataValues.email
            }
        })
     console.log(order[0].dataValues.id)
    let orderId = order[0].dataValues.id
    console.log(orderId)
    await Orderline.create(
        {
            orderId : orderId,
            productId: id,
            cantidad: cantidad,
            precio: product.dataValues.price
        })
        .then(()=>{
            res.status(200).json({message:"El producto se agrego al carrito"});
        })
        .catch(err =>{
            console.log(err)
            res.status(400).json({message: "El producto no se pudo agregar al carrito"});
        });
});

////////////////////// UPDATE ///////////////////

//Ruta para editar las cantidades del carrito
server.put('/:idUser/cart', async(req,res,next) => {
    const { idUser } = req.params;
    const {cantidad} = req.body;
    let order = await Order.findOne({ where: { userId: idUser, estado: 'Carrito' } });
    Orderline.update({cantidad: cantidad},{where: {orderId:order.id}})
        .then(res.status(200).json({message: 'La cantidad fue modificada'}))
        .catch(err=>{
            res.status(400).json({message: 'No pudo ser modificado', error: err})
        });
});

//Ruta para modificar los datos de un usuario.
server.put('/:id', async(req, res, next) => {
    // Los valores modificados se sacaran del body mas adelante
    const { userName, firstName, lastName, profilePic, description, email, edad } = req.body;
    await User.update({
        userName,
        firstName,
        lastName,
        profilePic,
        description,
        email,
        edad
    }, {
        where: {
            id: req.params.id
        }
    })
        .then(result => {
            //el update devuelve un array con la cantidad de filas afectadas.
            res.status(200).json({message: 'Modificado', user: result});
        })
        .catch(err => {
            res.status(400).json({message: 'No se pudo actualizar el usuario',error : err})
        });
});
////////////////////// DELETE ///////////////////

//Vaciando un carrito
//pasar por body el nuevo "status" del carrito como "Cancelado"
server.delete('/:id/cart',async (req, res, next) => {
    const {id} = req.params;
    await Order.findOne({where :{userId : id , estado : 'Carrito'}})
        .then(orden =>{
            Order.update({estado: 'Cancelada' } , {where: {id : orden.id}})
                .then(res.status(200).json({message: 'El carrito fue vaciado'}))
        })
        .catch(err =>{
            res.status(400).json({message: 'No se pudo vaciar el carrito',error : err})
        })
});

//borrado de un usuario
server.delete('/:id',async (req, res, next) => {
    await User.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(() => {
            res.json("Done");
    })
    .catch(err => {
        res.status(res.status(400).json({message: "No se pudo eliminar el usuario"}))
    })
});


module.exports = server;
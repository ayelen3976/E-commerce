const server = require('express').Router();
const { User, Order, Product , Orderline } = require('../db.js');
// const { Sequelize } = require('sequelize');


////////////////////// READ ///////////////////
//Buscamos todos los usuarios
server.get('/', (req, res, next) => {
    return User.findAll()
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            res.status(404, err)
        });
});

//Retorna Todas las ordenes de un usuario en particular
server.get('/:userId/order', (req, res, next) => {
    const { userId } = req.params;
    // console.log(id)
    Order.findAll({ where: { userId: userId } })
        .then(orderList=> {
            res.send(orderList)
        })
        .catch(res.send)
});

//Ruta para traer todos los items de un carrito
server.get('/:userId/cart', (req, res, next) => {
    const { userId } = req.params;
    Order.findOne({ where: { userId:userId , estado: 'Carrito' } })
        .then(orden => {
           Orderline.findAll({ where: { orderId: orden.id }})
                .then(response => { res.status(200).json(response) })
        })
        .catch(res.send);
});


//Buscamos los usuarios que contengan la palabra pasada como query string en su:
// userName, firstName, lastName ,email
server.get('/search', (req, res, next) => {
    const value = req.query.query;
    const Op = Sequelize.Op

    User.findAll({
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
            res.status(400, err)
        });
});

//Nos trae solo el usuario cuyo id se pasa como parametro
server.get('/:id', (req, res, next) => {
    return User.findByPk(req.params.id)
        .then(user => {
            res.send(user)        
        })
        .catch(err => {
            res.status(400,err)
        });
});

////////////////////// CREATE ///////////////////
//Creamos un usuario con los parametros recibidos por el body
server.post('/', (req, res,next) => {
    const { userName, firstName, lastName, profilePic, description, email ,edad} = req.body;
    
    return User.create({userName,firstName,lastName,profilePic,description,email,edad})
        .then(producto => {
            res.status(201).json(producto)
        })
        .catch(err => {
            res.status(404, err)
        });
})



//Agregamos un producto al carrito de un usuario en particular
server.post('/:idUser/cart',async (req,res,next) =>{
    //El ID va a ser el ID del Producto 
    const {id , cantidad} = req.body;
    const {idUser} = req.params;
    console.log(id)
    console.log(idUser)
    let product = await Product.findByPk(id)
    let order = await Order.create({ userId: idUser, estado: 'Carrito' })
        // .then(console.log("BIEN"))
        .catch(res.send);

    await Orderline.create(
        {
            orderId : order.dataValues.id,
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
server.put('/:id', (req, res, next) => {
    // Los valores modificados se sacaran del body mas adelante
    const { userName, firstName, lastName, profilePic, description, email, edad } = req.body;
    User.update({
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
            res.status(400, err)
        });
});
////////////////////// DELETE ///////////////////

//Vaciando un carrito
//pasar por body el nuevo "status" del carrito como "Cancelado"
server.delete('/:id/cart', (req, res, next) => {
    const {id} = req.params;
    Order.findOne({where :{userId : id , estado : 'Carrito'}})
        .then(orden =>{
            Order.update({estado: 'Cancelada' } , {where: {id : orden.id}})
                .then(res.status(200).json({message: 'El carrito fue vaciado'}))
        })
        .catch(err =>{
            res.status(400).json({message: 'No se pudo vaciar el carrito',error : err})
        })
});

//borrado de un usuario
server.delete('/:id', (req, res, next) => {
    User.destroy({
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


module.exports = server;
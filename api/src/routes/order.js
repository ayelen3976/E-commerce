const server = require('express').Router();
const { Order } = require('../db.js');


//////////////// READ ////////////////

//Get con query segun el estatus de la orden
server.get('/', (req, res, next) => {
    const value = req.query.status;
    // console.log(req.query)
    // console.log(value)
    const Op = Sequelize.Op;

    Order.findAll({
        where: {
            estado:  value ,
        }
    })
        .then(orderList => {
            res.json(orderList);
        })
        .catch(err => {
            res.status(400, err);
        });
});

//DEVUELVE UNA ORDEN EN PARTICULAR >>> Preguntar si tiene que devolver los productos que incluyen o solo el estado
server.get('/:id', (req, res, next) => {
    return Order.findByPk(req.params.id)
        .then(order => {
            res.send(order);     
        })
        .catch(err => {
            res.status(400,err);
        });
});

//////////////// UPDATE //////////////// >>Preguntar si tiene que modificar la OrderLine o solo el estado
//orders/:id
server.put('/:id', (req, res, next) => {
    // Los valores modificados se sacaran del body mas adelante
    const { estado } = req.body;
    if (estado === 'Carrito'||estado ==='Creada'||estado ==='Procesando'|| estado ==='Cancelada'||estado ==='Completa'){
        Order.update({
            estado: estado
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.status(200).json("done");
        })
        .catch(err => {
            res.status(400, err);
        });
    }else {
        res.send("El estado no cumple los requisitos para ser modificado");
    };
});


module.exports = server;

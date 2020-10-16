const server = require('express').Router();
const { Order,Product } = require('../db.js');



//////////////// READ ////////////////

//Este get puede o no recibir un estado por parametro, si lo recibe devuelvo todos las ordenes
//que se encuentren en ese estado
server.get('/', (req, res, next) => {
    const value = req.query.status;
    // console.log(req.query)
    // console.log(value)
    if(value){
        Order.findAll({
            where: {
                estado:  value ,
            }
        })
            .then(orderList => {
                if(orderList) res.json(orderList);
                res.send("No se encontraron ordenes con ese estado")
            })
            .catch(err => {
                res.status(400, err);
            });
    }else {
        Order.findAll()
            .then(orderList => {
                res.json(orderList);
            })
            .catch(err => {
                res.status(400, err);
            });
    }
});

//DEVUELVE UNA ORDEN EN PARTICULAR 
server.get('/:id', (req, res, next) => {
    return Order.findByPk(req.params.id,{include:[Product]})
        .then(order => {
            res.send(order);     
        })
        .catch(err => {
            res.status(400,err);
        });
});

//////////////// UPDATE //////////////// 

//Modificamos el estado de una Order.
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

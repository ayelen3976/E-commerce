const server = require('express').Router();
const { response } = require('express');
const { Order,Product ,OrderLine , User} = require('../db.js');



//////////////// READ ////////////////

//Este get puede o no recibir un estado por parametro, si lo recibe devuelvo todos las ordenes
//que se encuentren en ese estado
server.get('/', async(req, res, next) => {
    const value = req.query.status;
    // console.log(req.query)
    // console.log(value)
    if(value){
        await Order.findAll({
            where: {
                estado:  value ,
            },include: User
        })
            .then(orderList => {
                if(orderList) res.json(orderList);
                res.send("No se encontraron ordenes con ese estado")
            })
            .catch(err => {
                res.status(404).json({message: "No se encontraron Ordenes con ese estado" , error: err})
            });
    }else {
        await Order.findAll()
            .then(orderList => {
                res.json(orderList);
            })
            .catch(err => {
                res.status(404).json({message: "No se encontraron Ordenes" , error: err})
            });
    }
});

//DEVUELVE UNA ORDEN EN PARTICULAR 
server.get('/:id',async (req, res, next) => {
    await Order.findByPk(req.params.id,{include:[Product]})
        .then(order => {
            res.send(order);     
        })
        .catch(err => {
            res.status(404).json({message: "No se encontro la orden requerida" , error: err})
        });
});

//////////////// UPDATE //////////////// 

//Modificamos el estado de una Order.
server.put('/:id', async(req, res, next) => {
    // Los valores modificados se sacaran del body mas adelante
    const { estado } = req.body;
    if (estado === 'Carrito'||estado ==='Creada'||estado ==='Procesando'|| estado ==='Cancelada'||estado ==='Completa'){
        await Order.update({
            estado: estado
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.status(200).json('done');
        })
        .catch(err => {
            res.status(404).json({message: "No se pudo modificar el estado de la orden" , error: err})
        });
    }else {
        res.send("El estado no cumple los requisitos para ser modificado");
    };
});


module.exports = server;

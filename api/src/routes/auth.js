const server = require('express').Router();
const { response } = require('express');
const { User , Role} = require('../db.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../../auth');

//Ruta de logeo
server.post('/login' , async(req,res,next)=> {
    let {email,password} = req.body;
    //PRIMERO BUSCMAOS EL USUARIO
    User.findOne({
        where: {
            email
        }
    })
    .then(user => {
        //Comparamos las contraseñas: una pasada por body y la otra la registrada en la bd
        //La funsion compareSync() devolvera un true o false asi que usamos un if
        if(bcrypt.compareSync(password,user.password)){
            //Creamos token igual que en el signUp
            let token = jwt.sign({user: user}, authConfig.secret ,{
                expiresIn : authConfig.expires
            })

            res.json({
                user:user,
                token:token
            })
            
        }else {
            res.status(401).json({message: 'Contraseña incorrecta'})
        }
    })
    .catch(err => {
        res.status(401).json({message: 'El usuario no se encontro' , error : err})
    })
})

server.post('/logout' , (req,res,next) => {
    req.headers.authorization = ''
})

server.post('/promote/:id' , async(req,res,next) =>{
    await User.findByPk(req.params.id )
        .then(user => {
            return User.update({rol: 'Admin' },{where: {id: user.id}})
        })
        .then(()=> {
            res.status(200).json('Actualizado con exito')
        })
        .catch(err => {
            res.status(401).json({message: 'No se encontro el usuario o no se pudo actualizar el rol' , error : err})
        })
})

module.exports = server;
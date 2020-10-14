const server = require('express').Router();
const  { User } = require('../db.js');
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

////////////////////// UPDATE ///////////////////
server.put('/:id', (req, res, next) => {
    // Los valores modificados se sacaran del body mas adelante
    const { userName, firstName, lastName, profilePic, description, email ,edad} = req.body;
    User.update({
        userName,
        firstName,
        lastName,
        profilePic,
        description,
        email ,
        edad
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
////////////////////// DELETE ///////////////////
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
const jwt = require('jsonwebtoken');
const authConfig = require('../../auth');
const { User } = require('../db'); 

module.exports = (req, res, next) => {

    // Comprobar que existe el token -> Este mismo se encuentra en la authorization del header
    if(!req.headers.authorization) {
        res.status(401).json({ msg: "Acceso no autorizado" });
    } else {

        // Comrpobar la validez de este token
        let token = req.headers.authorization.split(" ")[1];

        // Comprobar la validez de este token
        jwt.verify(token, authConfig.secret, (err, decoded) => {

            if(err) {
                res.status(500).json({ msg: "Ha ocurrido un problema al decodificar el token", err });
            } else {
                //Cuando pasamos el token y decodificamos el token buscamos el usuario por id
                //que esta dentro del payload de este token y sacamos el usuario junto con los roles que tiene

                User.findByPk(decoded.user.id, { include: "roles" }).then(user => {

                    //console.log(user.roles);
                    //dentro de este objeto user esta el usuario y los roles
                    req.user = user;
                    next();
                });
            }

        })
    }

};
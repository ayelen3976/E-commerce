
const { User } = require('../models/index');
//Middelware para controloar a los usuarios
module.exports = {

    admin(req, res, next) {
        if(req.user.role === 'Admin') {
            next();
        } else {
            res.status(401).json({ msg: "No estas autorizado para ver esta pulicacion" });
        }
    },

}
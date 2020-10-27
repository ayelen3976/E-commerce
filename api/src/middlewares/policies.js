
//Middelware para controloar a los usuarios
module.exports = (req, res, next)=> {
        if(req.user.rol === 'Admin') {
            next();
        } else {
            res.status(401).json({ msg: "No estas autorizado para ver esta pulicacion" });
        }
}
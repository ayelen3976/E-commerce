const server = require('express').Router();
require('dotenv').config()
const auth = require('../middlewares/auth')
const policies = require('../middlewares/policies')
const nodemailer = require('nodemailer')

server.post('/',(req,res)=>{
    const {firstName,lastName,userName,email,edad,password} = req.body;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    var mailOptions = {
        from: 'Remitente',
        to: email,
        subject: 'Bienvenido a Moscow Dietetica',
        text: `Bienvenido${firstName} ${lastName} \n Estamos agradecidos de 
        tenerte con nosotros.\n Estos son tus datos de usuario:\n 
        Nombre de Usuario:${userName}\n
        Nombre:${firstName}\n
        Apellido:${lastName}\n
        Email:${email}\n
        Edad:${edad}\n
        Contraseña:${password}\n`
    }

    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            res.status(500).send(error.message)
        }else{
            res.status(200).json({message: 'Email Enviado'})
        }
    })
})



module.exports = server;
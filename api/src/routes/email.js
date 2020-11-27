const server = require('express').Router();
require('dotenv').config()
const auth = require('../middlewares/auth')
const policies = require('../middlewares/policies')
const nodemailer = require('nodemailer')

server.post('/',(req,res)=>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    var mailOptions = {
        from: 'Remitente',
        to: 'fernandezjubin.data@gmail.com',
        subject: 'Enviando correo desde nodemailer',
        text: '!!!!HOLA COMO ESTAS!!!!'
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
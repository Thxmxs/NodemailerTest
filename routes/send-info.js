const express = require("express");
const router = express.Router();
require('dotenv').config()
const nodemailer = require("nodemailer");



router.post("/",(req,res)=>{
    let body = req.body;
    const output =`
    <p> tienes una nueva solicitud de contacto </p>
    <h3> Detalles del contacto </h3>
    <ul>
    <li>name:${body.name}</li>
    <li>email:${body.email}</li>
    </ul>
    `
    let transporter = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:587,
        secure:false,
        auth:{
            user:`${process.env.USER}`,
            pass:`${process.env.PASSWORD}`
        }
    });
    
    let mailOption={
        from:`"meruane posting" <${process.env.USER}>`,
        to:`${process.env.DESTINATION}`,
        subject:"solicitud de contacto",
        html:output
    }
    
    transporter.sendMail(mailOption,function(err , data){
    if(err){
        console.log(err);
    }
    else{
        console.log('email Sent');
    }
    })

})


module.exports=router;
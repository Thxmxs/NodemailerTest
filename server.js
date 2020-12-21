require('dotenv').config()
const express = require("express");
const app = express();


app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(require('./routes'));
app.set('view engine','hbs');



app.listen(process.env.PORT,(err)=>{
    if(err){
        return console.log(err);
    }
    console.log(process.env.PORT);
    console.log(`escuchando el puerto ${process.env.PORT}`);
})
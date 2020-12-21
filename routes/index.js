const express = require("express");
const router = express.Router();

router.use("/send-info",require('./send-info'))

router.get("/",(req,res)=>{
    res.render('index')
})

module.exports=router;
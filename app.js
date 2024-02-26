// // 
const express = require("express");
// const voiture = require('./routes/voiture')
const app = express();
const router = express.Router();

const dotenv = require('dotenv');
dotenv.config()
const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 5001;


// const listvoiture = [{"id":1, "name":"clio"},{"id":2, "name":"Porshe Panamera"},{"id":3,"name":"range"}];


// router.post('/add',(req,res)=>{

//     const newV = req.body;
//     listvoiture.push(newV);

// })

// router.get('/list',(req,res)=>{
//     console.log(listvoiture)
// })

// router.put('/modify',(req,res,id)=>{

// })

// app.listen(PORT, ()=> {
//     console.log("Server")
// })

const mongo = require('mongoose');

mongo.connect(MONGODB_URI).then(()=>{
    console.log("connected");
    app.listen(PORT,()=>{
        console.log(`server listens on ${PORT}`);
    })
}).catch((err)=>{
    console.log("Error",err.message);
})

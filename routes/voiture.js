
const express = require("express");
const app = express();
const PORT = 9000;
// const router = express.Router();



const listvoiture = [{"id":1, "name":"clio"},{"id":2, "name":"Porshe Panamera"},{"id":3,"name":"range"}];


app.post('/add',(req,res)=>{

    const newV = req.body;
    listvoiture.push(newV);

})
app.get('/list',(req,res)=>{
    console.log(listvoiture)
})
app.put('/modify/:id',(req,res)=>{
    const vId = parseInt(req.params.id);
    const vIndex = listvoiture.findIndex(voiture => listvoiture.id === vId);
    //
})

app.delete('/delete/:id',(req,res)=>{
    const vId = parseInt(req.params.id);
    const vIndex = listvoiture.findIndex(voiture => listvoiture.id === vId);
    listvoiture.splice(vIndex,1);
})

app.listen(PORT, ()=> {
    console.log("Server")
})
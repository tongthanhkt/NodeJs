const express=require('express');
const app=express();
app.get('/',(req,res)=>res.send("<h1>Hello world</h1>"));
app.listen(3001,(req,res)=>{
    console.log("Server connected on port 3000...");
})
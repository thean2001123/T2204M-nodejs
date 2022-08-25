const express = require("express");
const app = express();
const port = process.env.PORT | 5000;

app.listen(port,function (){
    console.log("Server is running..");
})

app.get("/",function (req,res){
    res.send("Hello world!");

})
app.get("/bong-da",function (req,res){
    res.send("Bong da 24H");
})
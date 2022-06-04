const express = require("express");
const path = require('path');
const app = express();
const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log('Servidor corriendo en el puerto 3000')
});

app.get("/", function(req,res){
    res.sendFile(__dirname + '/views/index.html')});

app.get("/login", function(req,res){
    res.sendFile(__dirname + '/views/login.html')});

app.get("/vistaProducto", function(req,res){
    res.sendFile(__dirname + '/views/vistaProducto.html')});

app.get("/carrito", function(req,res){
    res.sendFile(__dirname + '/views/carrito.html')});

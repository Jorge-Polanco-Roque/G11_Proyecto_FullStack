const path = require("path");
const fs = require("fs");

const productosDbPath = path.join(__dirname, "../db/productos.json");

const readJsonFile = ( path ) => {
    const data = fs.readFileSync(path, "utf-8");
    const dataParsed = JSON.parse(data);
    return dataParsed;
}
const controller = {
    index: (req, res) => {
        const productosVenta = readJsonFile(productosDbPath);
       return res.render("index", { productosVenta} )
    },


    login: (req,res) => 
    res.render("login"),
    

    vistaProducto: (req, res) => 
    res.render("vistaProducto") ,
    
   
   
    carrito: (req,res) => 
    res.render("carrito"),

    edicionProductos: (req, res) =>
    res.render("edicionProductos")
}


module.exports = controller;

/*const controller = {
    index: (req, res) => {
        return res.render("index");
    },
    /*{ 
       const productosVenta = readJsonFile(productosPath);
       return res.render("index", {productosVenta} )
    },*/
/*{
        const id = req.params.id;
        const productosVenta = readJsonFile(dbPath);
        const productoEncontrado = productosVenta.find(function(articulo){
            return articulo.id == id;
        });
        
        return res.render("vistaProducto", { productoEncontrado })
    },*/
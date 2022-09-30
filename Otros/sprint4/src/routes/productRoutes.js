const express = require("express");
const path = require('path');
const router = express.Router();
const mainController = require("../controller/mainController");



//   /products (GET)
router.get("/", mainController.index);


//  /products/create (GET)
router.get("/create", mainController.login);


//  /products/:id (GET)
router.get("/:id", mainController.vistaProducto);


//  /products/:id (GET)
router.get("/carrito", mainController.carrito);

router.get("/edicionProductos", mainController.edicionProductos);

module.exports = router;

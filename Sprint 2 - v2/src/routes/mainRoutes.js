const express = require("express");
const path = require('path');
const router = express.Router();
const mainController = require("../controller/mainController");

router.get("/", mainController.index);

router.get("/login", mainController.login);

router.get("/vistaProducto", mainController.vistaProducto);

router.get("/carrito", mainController.carrito);

module.exports = router;

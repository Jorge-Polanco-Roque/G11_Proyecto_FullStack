const express = require('express');

const router = express.Router();
const upload = require("../middlewares/multer2");
const { body } = require("express-validator");
const usersController = require('../controllers/userController');

const validaciones = [
    body("firstName").notEmpty().withMessage("Tienes que escrivir tu nombres"),
    body("lastName").notEmpty().withMessage("Tienes que escrivir tu apellido"),
    body("email").notEmpty().withMessage("Tienes que escrivir un e-mail"),
    body("dateOfBirth").notEmpty().withMessage("Pon tu fecha de nacimiento"),
    body("gender").notEmpty().withMessage("Elige tu genero "),
    body("nameUser").notEmpty().withMessage("Elige un nombre de usuario"),
    body("password1").notEmpty().withMessage("Tienes que escrivir una contrseña"),
    body("password2").notEmpty().withMessage("Confirma tu contraseña")   
    
]

router.get('/', usersController.index); 

router.get("/register/", usersController.register);
router.post("/", upload.single("image"), validaciones, usersController.store);










module.exports = router;
const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/users.json');
const {validationResult} = require("express-validator")

const readJsonFile = (path) =>{
	return JSON.parse(fs.readFileSync(path, 'utf-8'));
}


const controller = {

	index: (req, res) => {
		const users = readJsonFile(usersFilePath);
		res.render('users', {users});
	},

    register: (req, res) =>{
        res.render("register");
         },

    
        

         store: (req, res) => {
            const resultValidation = validationResult(req);

            if(resultValidation.errors.length > 0){
                return res.render("register",{errors: resultValidation.mapped(),
                });
            }

            const users = readJsonFile(usersFilePath)
            const usuario = {
                id: users[users.length -1].id + 1,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                dateOfBirth: req.body.dateOfBirth,
                gender: req.body.gender,
                nameUser: req.body.nameUser,
                password1: req.body.password1,
                password2: req.body.password2,
                image: req.file?.filename || "default-image.png",
                
            }
    
            users.push(usuario);
            fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
            return res.redirect("/products")
        }
        

    
}
module.exports = controller;

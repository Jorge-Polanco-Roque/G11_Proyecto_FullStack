const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/users.json');
const {validationResult} = require("express-validator")
const bcryptjs = require("bcryptjs");
const usersModels = require("../models/UserModels")

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
                    oldData: req.body
                });
            }

            let usersEmail = usersModels.findByField('email', req.body.email);
           // const users1 = readJsonFile(usersFilePath)
            if(usersEmail) {
                return res.render("register",{
                    errors:{
                        email: {
                            msg: "Este mail ya esta registrado"
                        }
                    },
                    oldData: req.body
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
                password1: bcryptjs.hashSync(req.body.password1, 10),
                password2: bcryptjs.hashSync(req.body.password2, 10),
                image: req.file?.filename || "default-image.png",
                
            }
    
            users.push(usuario);
            fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
            return res.redirect("/users/login")
        },

        login: (req, res) =>{
            res.render("login");
             },

        processLogin:(req, res) =>{
            let userToLogin = usersModels.findByField('email', req.body.email);
            
		
            if(userToLogin) {
                let isOkThePassword = bcryptjs.compareSync(req.body.password2, userToLogin.password2);
                if (isOkThePassword) {
                    delete userToLogin.password2;
                    req.session.userLogged = userToLogin;

                    if(req.body.remember_user) {
                        res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 2})
                    }
    
                    return res.redirect('profile');
                }
                return res.render('login', {
                    errors: {
                        email: {
                            msg: 'Las credenciales son inválidas'
                        }
                    }
                });
            }
            return res.render('login', {
                errors: {
                    email: {
                        msg: 'Este email no esta registrado'
                    }
                }
            });
            
           
        },
        
        profile: (req, res) =>{
           
            res.render("profile", {
                user: req.session.userLogged 
                
             } );
        },

        logout: (req, res) =>{
            res.clearCookie('userEmail');
		    req.session.destroy();
		    return res.redirect('/');
	}
        }
        

module.exports = controller;

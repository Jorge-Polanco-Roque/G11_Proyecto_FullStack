const { Router } = require('express');
const router = new Router();
const _ = require('underscore');

const usuarios = require('../../users.json');

router.get('/', (req, res) => {
    res.json(usuarios);
});

router.post('/', (req, res) => {
    const id = usuarios.length + 1;
    const { firstName, lastName, email, dateOfBirth, nameUser } = req.body;
    const newUser = { ...req.body, id };
    if (id && firstName && firstName && email && dateOfBirth && nameUser) {
        products.push(newUser);
        res.json(usuarios);
    } else {
        res.status(500).json({error: 'There was an error.'});
    }
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email, dateOfBirth, nameUser } = req.body;
    if (id && firstName && firstName && email && dateOfBirth && nameUser) {
        _.each(usuarios, (user, i) => {
            if (user.id === id) {
                user.firstName = firstName;
                user.lastName = lastName;
                user.email = email;
                user.dateOfBirth = dateOfBirth;
                user.nameUser = nameUser;
            }
        });
        res.json(usuarios);
    } else {
        res.status(500).json({error: 'There was an error.'});
    }
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    if (id) {
        _.each(usuarios, (user, i) => {
            if (user.id == id) {
                user.splice(i, 1);
            }
        });
        res.json(usuarios);
    }
});

module.exports = router;
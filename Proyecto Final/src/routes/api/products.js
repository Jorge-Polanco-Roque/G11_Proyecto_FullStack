const { Router } = require('express');
const router = new Router();
const _ = require('underscore');

const products = require('../../products.json');

router.get('/', (req, res) => {
    res.json(products);
});

router.post('/', (req, res) => {
    const id = products.length + 1;
    const { name, description, category, discount, price } = req.body;
    const newProduct = { ...req.body, id };
    if (id && name && description && category && discount && price) {
        products.push(newProduct);
        res.json(products);
    } else {
        res.status(500).json({error: 'There was an error.'});
    }
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, description, category, discount, price } = req.body;
    if (id && name && description && category && discount && price) {
        _.each(products, (product, i) => {
            if (product.id === id) {
                product.name = name;
                product.description = description;
                product.category = category;
                product.discount = discount;
                product.price = price;
            }
        });
        res.json(products);
    } else {
        res.status(500).json({error: 'There was an error.'});
    }
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    if (id) {
        _.each(products, (product, i) => {
            if (product.id == id) {
                products.splice(i, 1);
            }
        });
        res.json(products);
    }
});

module.exports = router;
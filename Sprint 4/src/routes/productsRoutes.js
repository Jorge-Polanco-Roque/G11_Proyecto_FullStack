const express = require('express');
const router = express.Router();
const upload = require("../middlewares/multer");

const productsController = require('../controllers/productsController');

router.get('/', productsController.index); 

router.get("/create/", productsController.create);

router.post('/', upload.single("productImage"), productsController.store);

router.get('/:id', productsController.detail); 

router.get('/:id/edit', productsController.edit);

router.put('/:id', productsController.update);

router.delete('/:id', productsController.destroy); 


module.exports = router;
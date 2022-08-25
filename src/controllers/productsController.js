const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');

const readJsonFile = (path) =>{
	return JSON.parse(fs.readFileSync(path, 'utf-8'));
}


const controller = {

	index: (req, res) => {
		const products = readJsonFile(productsFilePath);
		res.render('products', {products});
	},

	create: (req, res) =>{
    res.render("producto-creacion");
     },

	detail: (req, res) => {
		const products = readJsonFile(productsFilePath)
		const product = products.find(product => product.id == req.params.id)
		res.render('detailProducto', { product });
	},

	store: (req, res) => {
		const products = readJsonFile(productsFilePath)
		const producto = {
			id: products[products.length -1].id + 1,
			name: req.body.name,
			description: req.body.description,
			image: req.file?.filename || "default-image.png",
			category: req.body.category,
			discount: req.body.discount,
			price: req.body.price,
			
		}

		products.push(producto);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
		return res.redirect("/products")
	},

	edit: (req, res) => {
		const products = readJsonFile(productsFilePath)
		const product = products.find(product => product.id == req.params.id)
		res.render('producto-edicion', { product });
	},

	update: (req, res) => {
		// Do the magic
		const products = readJsonFile(productsFilePath)
		for(let i = 0; i < products.length; i++) {
			if(products[i].id == req.params.id){
				products[i] = {
					...products[i],
					
					description: req.body.description,
					name: req.body.name,
					category: req.body.category,
					discount: req.body.discount,
					price: req.body.price,
					//image: req.file?.filename || "default-image.png"
				} 
			}
		};
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
		return res.redirect("/products");
	},

	destroy: (req, res) => {
		const products = readJsonFile(productsFilePath);
		const productosFiltrados = products.filter(product => product.id != req.params.id);

		fs.writeFileSync(productsFilePath, JSON.stringify(productosFiltrados, null, 2));
		return res.redirect("/products");
	}


}
module.exports = controller;
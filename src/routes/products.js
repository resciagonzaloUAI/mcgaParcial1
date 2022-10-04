const productController = require('../controllers/products');
const express = require('express');
const router = express.Router();

//Agrego endpoints get,post,put,delete

router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductByIdOrName);
router.post('/products', productController.createProduct);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;
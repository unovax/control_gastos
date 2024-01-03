import express from 'express';

const router = express.Router();

import ProductController from '../controllers/ProductController.js';

// Rutas para productos
router.get('/products', ProductController.getAllProducts);
router.post('/products', ProductController.createProduct);

// Exportar el router
module.exports = router;

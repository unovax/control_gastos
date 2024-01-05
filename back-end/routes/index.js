import express from 'express';

const router = express.Router();

import ProductController from '../controllers/ProductController.js';


// Rutas para productos
router.get('/products', ProductController.getAllProducts);
router.post('/products', ProductController.createProduct);
router.put('/products/:id', ProductController.updateProduct);
router.delete('/products/:id', ProductController.deleteProduct);


// Exportar el router
export default router;
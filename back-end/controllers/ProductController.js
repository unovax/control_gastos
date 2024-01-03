// controllers/productsController.js

import Product from '../models/Product.js';

const ProductController = {
    getAllProducts: async (req, res) => {
        try {
          const products = await Product.find();
          res.json(products);
        } catch (error) {
          console.error('Error en getAllProducts:', error);
          res.status(500).json({ error: 'Error al obtener los productos' });
        }
    },      
    createProduct: async (req, res) => {
        try {
          const newProduct = new Product(req.body);
          const savedProduct = await newProduct.save();
          res.json(savedProduct);
        } catch (error) {
          res.status(500).json({ error: 'Error al crear el producto' });
        }
    },
    updateProduct: async (req, res) => {
        try {
            const product = await Product.findById(req.params.id);
            if (product) {
            product.name = req.body.name;
            product.description = req.body.description;
            product.price = req.body.price;
            const updatedProduct = await product.save();
            res.json(updatedProduct);
            } else {
            res.status(404).json({ error: 'Producto no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Error al actualizar el producto' });
        }
    },
    deleteProduct: async (req, res) => {
        try {
            const product = await Product.findById(req.params.id);
            if (product) {
            await product.remove();
            res.json({ message: 'Producto eliminado' });
            } else {
            res.status(404).json({ error: 'Producto no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Error al eliminar el producto' });
        }
    }
};

export default ProductController;
// controllers/productsController.js

import Product from '../models/Product.js';

const ProductController = {
    getAllProducts: async (req, res) => {
        try {
            const page = parseInt(req.query.page) || 1;  // Página actual, por defecto la primera
            const limit = parseInt(req.query.limit) || 10;  // Número de resultados por página, por defecto 10
    
            // Calcular el índice de inicio
            const startIndex = (page - 1) * limit;
    
            // Realizar la consulta a la base de datos con los parámetros de paginación
            const products = await Product.find().skip(startIndex).limit(limit);
    
            res.json(products);
        } catch (error) {
            console.error('Error en getAllProducts:', error);
            res.status(500).json({ error: 'Error al obtener los productos' });
        }
    },
    createProduct: async (req, res) => {
        try {
            const { code, name, description, price } = req.body;
            const newProduct = new Product({
                code,
                name,
                description,
                price
            });
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
                product.code = req.body.code;
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
                await product.deleteOne();
                res.json({ message: 'Producto eliminado' });
            } else {
                res.status(404).json({ error: 'Producto no encontrado' });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Error al eliminar el producto' });
        }
    }
};

export default ProductController;
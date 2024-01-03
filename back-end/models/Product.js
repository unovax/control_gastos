import mongoose from 'mongoose';
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

const Product = mongoose.model('Product', productSchema);

const collectionName = Product.collection.name;

console.log('El modelo Product está conectado a la colección:', collectionName);

module.exports = mongoose.model('Product', productSchema);

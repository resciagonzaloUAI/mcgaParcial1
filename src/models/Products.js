const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creo el esquema con lo pedido en el parcial

const ProductSchema = new Schema({
  id: {
    type: String,
    unique: true,
    null: false
  },
  name: String,
  description: String,
  price: Number,
  stock: Number
});


const Products = mongoose.model ('Products', ProductSchema );
module.exports = Products;


//module.exports = mongoose.model('products', ProductSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductSchema = mongoose.Schema({
    productName: {type: String, required: true, unique: true},
    listDtail: [{type: ObjectId, ref: 'productDetails'}],
    thumbnail: {type: String, default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfFeFLwcGPyiM6MgD4eMSBmfKPQCQTQc-pDKQa1s8&s'},
    price: {type: Number},
    brand: {type: String},
    info: [{key:String, value: String}],
    categoryId:	{type: ObjectId, ref: 'categories'}
}, {timestamps: true, collection: 'products'});

const Product = mongoose.model('products', ProductSchema);

module.exports = Product;
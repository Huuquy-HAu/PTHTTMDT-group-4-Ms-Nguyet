const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductDetailSchema = mongoose.Schema({
    productId: {type: ObjectId, ref: 'products', required: true},
    color: {type: String},
    ram: String,
    rom: String,
    storage: Number,
    price: {type: Number, required: true},
    listImg: [{type: String}],
    status:	{type: String, enum: ['disable', 'enable'], default: 'disable'}
}, {timestamps: true, collection: 'productDetails'});

const ProductDetail = mongoose.model('productDetails', ProductDetailSchema);

module.exports = ProductDetail;
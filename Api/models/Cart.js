const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CartSchema = mongoose.Schema({
    userId: {type: String, ref: 'users', required: true},
    listProduct:[{ 
        productDetailId: {type: ObjectId, ref: 'productDetails'},  
        quantity: Number,
        select: {type: Boolean, default: false}
    }]
},{timestamps: true, collection: 'carts'});

const Cart = mongoose.model('carts', CartSchema);

module.exports = Cart;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const OrderSchema = mongoose.Schema({
    userId: {type: ObjectId, ref: 'users', required: true},
    listProduct: [{ 
       productDetailId: {type: ObjectId, ref: 'productDetails'},  
       quantity: Number 
    }],
    total: Number,
    status:	{type: String, enum: ['pending', 'delivering', 'done', 'canceled'], default: 'pending'},
    phone: {type: String, required: true},
    address: {type: String, required: true}
},{timestamps: true, collection: 'orders'});

const Order = mongoose.model('orders', OrderSchema);

module.exports = Order;
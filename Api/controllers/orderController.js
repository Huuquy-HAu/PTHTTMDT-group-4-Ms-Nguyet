const { userPublicFields } = require('../constant/constant');
const Cart = require('../models/Cart');
const Order = require('../models/Order')

exports.createOrder = async (req, res) => {
    try {
        const {phone, address} = req.body;

        const cart = await Cart.findOne({userId: req.user._id});
        let listProduct = cart.listProduct.filter((product) => product.select);
        let listRemain = cart.listProduct.filter((product) => !product.select);

        if(!listProduct.length) return res.status(400).json({message: 'please select product'});
        const order = await Order.create({userId: req.user._id, phone, address, listProduct});
        await Cart.findOneAndUpdate({userId: req.user._id}, {listProduct: listRemain}, {new: true, runValidators: true});
        res.status(200).json({order});
    } catch (error) {
        res.status(500).json({message: 'server error'});
    }
}

exports.getAllOrder = async (req, res) => {
    try {
        const orders = await Order.find()
        .populate({path: 'userId', select: userPublicFields})
        .populate({path: 'listProduct.productDetailId', populate: 'productId'});
        res.status(200).json({orders});
    } catch (error) {
        res.status(500).json({message: 'server error'});
    }
}


exports.getOneOrder = async (req, res) => {
    try {
        const order = await Order.findOne({_id: req.params.orderId})
        .populate({path: 'userId', select: userPublicFields})
        .populate({path: 'listProduct.productDetailId', populate: 'productId'});
        res.status(200).json({order});
    } catch (error) {
        res.status(500).json({message: 'server error'});
    }
}

exports.getOrderByUserId = async (req, res) => {
    try {
        const order = await Order.find({userId: req.params.userId})
        .populate({path: 'userId', select: userPublicFields})
        .populate({path: 'listProduct.productDetailId', populate: 'productId'});
        res.status(200).json({order});
    } catch (error) {
        res.status(500).json({message: 'server error'});
    }
}

exports.changeOrderStatus = async (req, res) => {
    try {
        const {status} = req.body; 
        const order = await Order.findOneAndUpdate({_id: req.params.orderId, status: {$nin: ['canceled', 'done']}},{status},{new:true, runValidators: true}).populate({path: 'listProduct.productDetailId', populate: 'productId'});
        res.status(200).json({order});
    } catch (error) {
        res.status(500).json({message: 'server error'});
    }
}
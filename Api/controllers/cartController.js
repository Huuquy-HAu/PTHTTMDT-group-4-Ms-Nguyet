const Cart = require('../models/Cart');

exports.getLogedInCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({userId: req.user._id}).populate({path: 'listProduct.productDetailId', populate: 'productId'});
        res.status(200).json({cart});
    } catch (error) {
        res.status(500).json({message: 'server error'});
    }
}

exports.addToCart = async (req, res) => {
    try {
        let {productDetailId, quantity} = req.body;
        checkDuplicate = await Cart.findOne({userId: req.user._id, 'listProduct.productDetailId': productDetailId});
        
        let cart;
        if(!checkDuplicate){
            cart = await Cart.findOneAndUpdate({userId: req.user._id},{$push: {listProduct: {productDetailId, quantity}}}, {new: true, runValidators: true});
        }else{
            cart = await Cart.findOneAndUpdate({userId: req.user._id, 'listProduct.productDetailId': productDetailId}, {$inc: {'listProduct.$.quantity': quantity}}, {new: true, runValidators: true});
        }
        res.status(200).json({cart});
    } catch (error) {
        res.status(500).json({message: 'server error'});
    }
}

exports.removeFromCart = async (req, res) => {
    try {
        let {productDetailId} = req.body;
        const cart = await Cart.findOneAndUpdate({userId: req.user._id}, {$pull: {listProduct: {productDetailId: productDetailId}}}, {new: true, runValidators: true});
        res.status(200).json({cart});
    } catch (error) {
        console.log(28, error);
        res.status(500).json({message: 'server error'});
    }
}

exports.updateCartQuantity = async (req, res) => {
    try {
        let {productDetailId, quantity} = req.body;
        const cart = await Cart.findOneAndUpdate({userId: req.user._id, 'listProduct.productDetailId': productDetailId}, {'listProduct.$.quantity': quantity}, {new: true, runValidators: true});
        res.status(200).json({cart});
    } catch (error) {
        res.status(500).json({message: 'server error'});
    }
}

exports.updateCartSelect = async (req, res) => {
    try {
        let {productDetailId, select} = req.body;
        const cart = await Cart.findOneAndUpdate({userId: req.user._id, 'listProduct.productDetailId': productDetailId}, {'listProduct.$.select': select}, {new: true, runValidators: true});
        res.status(200).json({cart});
    } catch (error) {
        res.status(500).json({message: 'server error'});
    }
}
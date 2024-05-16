const Product = require("../models/Product");
const ProductDetail = require("../models/ProductDetail");
const { checkDuplicateDetail } = require("../services/productDetailServices");
const fs = require('fs')
const path = require('path');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './publics/uploads/productDetails');
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname);
      cb(null, file.fieldname + '-' + uniqueSuffix);
    }
})

exports.upload = multer({ storage: storage , 
    fileFilter: function(req, file, cb){
        if(!file.mimetype.includes('image')) return cb(new Error('I don\'t have a clue!'))

        cb(null, true)
}})

exports.createProductDetail = async (req, res) => {
    try {
        const checkDetail = await checkDuplicateDetail(ProductDetail, req.body, req.params.productId);
        if(checkDetail) return res.status(400).json({message: 'this product-detail is avaiable'});

        const productDetail = await ProductDetail.create({...req.body, productId: req.params.productId});
        await Product.updateOne({_id: req.params.productId}, {$push: {listDtail: productDetail._id}});
        res.status(200).json({productDetail});
    } catch (error) {
        res.status(500).json({error, message: 'server error'});
    }
}

exports.getAllDetailOfProduct = async (req, res) => {
    try {
        const productDetails = await ProductDetail.find({productId: req.params.productId}).populate('productId');
        res.status(200).json({productDetails});
    } catch (error) {
        res.status(500).json({error, message: 'server error'});
    }
}

exports.getOneProductDetail = async (req, res) => {
    try {
        const detail = await ProductDetail.findOne({_id: req.params.productDetailId}).populate('productId');
        res.status(200).json({detail});
    } catch (error) {
        res.status(500).json({error, message: 'server error'});
    }
}

exports.updateProductDetailInfo = async (req, res) => {
    try {
        const detail = await ProductDetail.findOneAndUpdate({_id: req.params.productDetailId}, req.body, {new: true, runValidators: true});
        res.status(200).json({detail});
    } catch (error) {
        res.status(500).json({error, message: 'server error'});
    }
}

exports.updateProductDetailStatus = async (req, res) => {
    try {
        const detail = await ProductDetail.findOneAndUpdate({_id: req.params.productDetailId}, {status: req.body.status}, {new: true, runValidators: true});
        res.status(200).json({detail});
    } catch (error) {
        res.status(500).json({error, message: 'server error'});
    }
}

exports.addProductDetailThumbs = async (req, res) => {
    try {
        if(!req.files.length) return res.status(400).json({message: 'please choose image'});

        let listNewThumbs = req.files.map((file) => file.path);
        const detail = await ProductDetail.findOneAndUpdate({_id: req.params.productDetailId}, {$push: {listImg: {$each: listNewThumbs}}}, {new: true, runValidators: true});
        res.status(200).json({detail});
    } catch (error) {
        res.status(500).json({error, message: 'server error'});
    }
}

exports.removeProductDetailThumbs = async (req, res) => {
    try {
        const detail = await ProductDetail.findOneAndUpdate({_id: req.params.productDetailId}, {$pull: {listImg: req.body.path}}, {new: true, runValidators: true});
        fs.unlink(req.body.path, () => {return});
        res.status(200).json({detail});
    } catch (error) {
        res.status(500).json({error, message: 'server error'});
    }
}
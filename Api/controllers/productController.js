const Product = require("../models/Product");
const ProductDetail = require("../models/ProductDetail");
const fs = require('fs')
const path = require('path');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './publics/uploads/products');
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

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find().populate('listDtail').populate('categoryId');
        res.status(200).json({products})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'server error', error})
    }
}

exports.createProduct = async (req, res ) => {
    try {
        if(req.file){
            req.body.thumbnail = req.file.path;
        }
        const product = await Product.create(req.body);
        res.status(200).json({product});
    } catch (error) {
        res.status(500).json({message: 'server error', error});
    }
}

exports.getOneProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.productId).populate('listDtail').populate('categoryId');
        res.status(200).json({product});
    } catch (error) {
        res.status(500).json({message: 'server error', error});
    }
}

exports.updateProductThumb = async (req, res) => {
    try {
        if(!req.file) return res.status(400).json({message: 'please choose an image'});

        let product = await Product.findOne({_id: req.params.productId});

        if(!product.thumbnail.startsWith('http')){
            fs.unlink(product.thumbnail, () => {return});
        }

        let newproduct = await Product.findOneAndUpdate({_id: req.params.productId}, {thumbnail: req.file.path}, {new: true, runValidators: true});
        res.status(200).json({product: newproduct});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'server error', error});
    }
}

exports.updateProductInfo = async (req, res) => {
    try {
        const product = await Product.findOneAndUpdate({_id: req.params.productId}, req.body, {new: true, runValidators: true});
        res.status(200).json({product});    
    } catch (error) {
        res.status(500).json({message: 'server error', error});
    }
}

exports.findProductByName = async (req, res) => {
    try {
        const products = await Product.find({productName: {$regex: req.query.productName, $options: 'i'}}).populate('listDtail').populate('categoryId');
        res.status(200).json({products});    
    } catch (error) {
        res.status(500).json({message: 'server error', error});
    }
}
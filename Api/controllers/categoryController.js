const Category = require('../models/Category');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './publics/uploads/categories');
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname);
      cb(null, file.fieldname + '-' + uniqueSuffix);
    }
})

exports.upload = multer({ storage: storage , 
    fileFilter: function(req, file, cb){
        if(!file.mimetype.includes('image')) return cb(new Error('I don\'t have a clue!'));

        cb(null, true);
}})

exports.createCategory = async (req, res) => {
    try {
        if(req.file) req.body.thumbnail = req.file.path;

        const newCategory = await Category.create(req.body);
        res.status(200).json({newCategory});
    } catch (error) {
        res.status(500).json({message: 'server error'});
    }
}

exports.updateCategory = async (req, res) => {
    try {
        let oldCategory;
        if(req.file){
            req.body.thumbnail = req.file.path;
            oldCategory = await Category.findById(req.params.categoryId);
        }

        if(req.file && !oldCategory.thumbnail.startsWith('http')){
            fs.unlink(oldCategory.thumbnail, () => null);
        }

        const category = await Category.findOneAndUpdate({_id: req.params.categoryId}, req.body, {new: true, runValidators: true});
        res.status(200).json({category});
    } catch (error) {
        res.status(500).json({message: 'server error'});
    }
}

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json({categories});
    } catch (error) {
        res.status(500).json({message: 'server error'});
    }
}

exports.getOneCategory = async (req, res) => {
    try {
        const category = await Category.findOne({_id: req.params.categoryId});
        res.status(200).json({category});
    } catch (error) {
        res.status(500).json({message: 'server error'});
    }
}

exports.findCategoryByName = async (req, res) => {
    try {
        const categories = await Category.find({categoryName: { $regex: req.query.categoryName, $options: 'i' }});
        res.status(200).json({categories});
    } catch (error) {
        res.status(500).json({message: 'server error'});
    }
}
const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    categoryName: {type:String, required: true, unique: true},
    thumbnail: {type: String, default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfFeFLwcGPyiM6MgD4eMSBmfKPQCQTQc-pDKQa1s8&s'}
}, {timestamps: true, collection: 'categories'});

const Category = mongoose.model('categories', CategorySchema);

module.exports = Category;
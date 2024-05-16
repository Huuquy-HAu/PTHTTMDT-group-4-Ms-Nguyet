const mongoose = require('mongoose');

exports.connectDB = async () => {
    await mongoose.connect('mongodb://0.0.0.0:27017/TruePhone');
    console.log('mongoDB connected');
} 
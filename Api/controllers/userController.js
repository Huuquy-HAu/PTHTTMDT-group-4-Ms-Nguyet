const User = require("../models/User");
const bcrypt = require('bcrypt');
const fs = require('fs')
const path = require('path');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './publics/uploads/avatar');
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

exports.changePassword = async (req, res) => {
    try {
        const user = await User.findOne({_id: req.user._id});
        const checkPass = await bcrypt.compare(req.body.oldPass, user.password);

        if(!checkPass) return res.status(400).json({message: 'wrong password'});

        const password = await bcrypt.hash(req.body.newPass, 10);
        await User.updateOne({_id: req.user._id}, { password, token: '' });

        res.status(200).json({message: 'change password success'});
    } catch (error) {
        res.status(500).json({message: 'server error', error})
    }
}

exports.updateUserInfo = async (req, res) => {
    try {
        const {username, fullname, phone, sex, dateOfBirth} = req.body;
        await User.updateOne({_id: req.user._id}, {username, fullname, phone, sex, dateOfBirth});

        res.status(200).json({message: 'update success'});
    } catch (error) {
        res.status(500).json({message: 'server error', error})
    }
}

exports.changeAvatar = async (req, res) => {
    try {
        if(!req.file) return res.status(400).json({message: 'please choose an avatar'});
        
        const user = await User.findOne({_id: req.user._id});

        if(!user.avatar.startsWith('http')){
            fs.unlink(user.avatar, () => {return})
        }

        await User.updateOne({_id: req.user._id}, {avatar: req.file.path});
        res.status(200).json({message: 'change avatar ok'})
    } catch (error) {
        res.status(500).json({message: 'server error', error})
    }
}
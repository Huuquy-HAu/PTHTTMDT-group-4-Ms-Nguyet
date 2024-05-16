const User = require('../models/User');
const Cart = require('../models/Cart');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_PASS = process.env.JWT_PASS;

exports.signUp = async (req, res) => {
    try {
        const checkDup = await User.findOne({email: req.body.email});
        if(checkDup) return res.status(400).json({message: 'email is in used'});

        const password = await bcrypt.hash(req.body.password, 10);
        req.body.password = password;

        const username = req.body.email.split('@')[0];
        const user = await User.create({...req.body, username});
        await Cart.create({userId: user._id});

        res.status(200).json({message: 'create account success'})
    } catch (error) {
        res.status(500).json({message: 'server error', error})
    }
}

exports.signIn = async (req, res) => {
    try {
        const checkEmail = await User.findOne({email: req.body.email});
        if(!checkEmail) return res.status(400).json({message: 'wrong email'});

        const checkPass = await bcrypt.compare(req.body.password, checkEmail.password);
        if(!checkPass) return res.status(400).json({message: 'wrong password'});

        delete checkEmail._doc.password;
        delete checkEmail._doc.token;
        const token = jwt.sign(checkEmail._doc, JWT_PASS);
        await User.updateOne({_id: checkEmail._id}, {token});

        res.status(200).json({message: 'login success', token})
    } catch (error) {
        res.status(500).json({message: 'server error', error})
    }
}

exports.getLogedInUser = async (req, res) => {
    try {
        const user = await User.findOne({_id: req.user._id}).select(['-password', '-token']);
        res.status(200).json({user})
    } catch (error) {
        res.status(500).json({message: 'server error', error})
    }
}
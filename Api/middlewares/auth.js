const jwt = require('jsonwebtoken');
const JWT_PASS = process.env.JWT_PASS;
const User = require('../models/User');

exports.checkLogin = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if(!token) return res.status(400).json({message: 'not loged in'});
        
        const user = jwt.verify(token, JWT_PASS);
        const checkToken = await User.findOne({_id: user._id, token});

        if(!checkToken) return res.status(400).json({message: 'invalid token'}); 

        req.user = user;
        next();
    } catch (error) {
        res.status(500).json({message: 'server error', error})
    }
}

exports.checkAdmin = async (req, res, next) => {
    try {
        if(req.user.role === 'admin'){
            next()
        }else{
            return res.status(400).json({message: 'you are not allow'}); 
        }
    } catch (error) {
        res.status(500).json({message: 'server error', error})
    }
}
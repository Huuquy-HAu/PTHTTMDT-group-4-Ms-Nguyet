const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {type: String},
    fullname: {type: String},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    phone: {type: String},
    sex: {type: String, enum: ['male', 'female']},
    dateOfBirth: Date,
    avatar:	{type: String, default: 'https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=20&m=476085198&s=612x612&w=0&h=8J3VgOZab_OiYoIuZfiMIvucFYB8vWYlKnSjKuKeYQM='},
    role: {type: String, enum: ['user', 'admin'], default: 'user'},
    token: String
}, {timestamps: true, collection: 'users'})

const User = mongoose.model('users', UserSchema);

module.exports = User;
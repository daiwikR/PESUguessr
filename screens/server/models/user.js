const mongoose=require('mongoose');
const {Schema}= mongoose

const userSchema = new Schema({
    name:{
        type:String,
        required:true,
        min:6,
        max:255
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        min:6,
        max:1024
    },

    });

    const UserModel = mongoose.model('User', userSchema);

    module.exports = UserModel;


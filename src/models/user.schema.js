const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
    firstName : {
        type: String, 
        required: true, 
        trim: true
    },
    lastName : {
        type: String, 
        required: true, 
        trim: true
    },
    email: {
        type: String, 
        unique: true,
        required: true
    }, 

    password:{
        type: String,
        required: true
    },
    age: {
        type: Number
    },

    role: {
        type : String, 
        enum: ["basic", "admin"]
    },

    claim: [{type: String, enum: ["basic", "admin", "superadmin", "shjhsjhd"]}],

    gender: {
        type : String, 
        enum: ["male", "female"]
    }
})

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel


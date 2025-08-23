const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
     age: {
        type: Number,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    status:{
        type:String,
        required:true

    }
})

const person = mongoose.model('person',personSchema);
module.exports = person;
const mongoose = require('mongoose');
const countrySchema= mongoose.Schema({
    // name:{type:String, required:true,unique: true },
    // population:{type:Number, required:true},
    // nativeName:{type:[], required:true},
    // date:{type:Date},
    roll:{type:Number,  required:true,  minLength: 4,maxLength:15},

});
const countryModel = mongoose.model("countries", countrySchema);
module.exports = countryModel;
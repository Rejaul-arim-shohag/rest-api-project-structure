const mongoose = require('mongoose');
const demoSchema = mongoose.Schema({
    name:String,
    class:String,
    roll:String,
    natinonality:String,
    adult:Boolean,
    date:{
        type: Date,
        default: Date.now
    },
    comments:[],
    details:{}
},
{ versionKey:false}
);
const demoModel = mongoose.model("democollections", demoSchema);
module.exports = demoModel;
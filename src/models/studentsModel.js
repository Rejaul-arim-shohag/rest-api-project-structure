const mongoose = require('mongoose');
const studentSchema = mongoose.Schema({
    name: {type:String},
    roll:{ 
        type: Number,
        min: [9, "Min 9 and max 12, but submitting vale is less than 9, and your value is {VALUE}"],
        max:  [14, "Min 9 and max 12, but submitting vale is getter than 14, and your value is {VALUE}"]},
    class:{type:String},
    natinonality:{type:String},
    mobile:{
        type:String,
        validate:{
            validator:function(value){
                if(value.length==11){
                    return true;
                }
                else{
                    return false;
                }
            },
            message:"Mobile Number must be 11 digit"
        }
    },

    mobileNumber:{
        type: String,
        validate:{
            validator:(value)=>{
                return /^(?:\+88|88)?(01[3-9]\d{8})$/.test(value);
            },
            message:"Mobile number is not valid"
        }
    }
},
);
const studentsModel = mongoose.model("students", studentSchema);
module.exports = studentsModel;
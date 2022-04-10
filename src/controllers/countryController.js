const countryModel = require("../models/countryModel")
exports.countryInsert = (req, res)=>{
    const bodydata = req.body;
    countryModel.create(bodydata, (err, data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data:data})
        }
    })
}
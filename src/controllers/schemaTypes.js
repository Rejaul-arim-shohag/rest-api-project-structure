const demoModel = require("../models/demoModel");
exports.schemaTypesPractice = (req, res)=>{
    const data = req.body;
    demoModel.create(data, (err, data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data})
        }
    })
}
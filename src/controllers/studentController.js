const studentModel = require("../models/studentsModel")

//insert data
exports.insertStudentData = (req, res)=>{
    const data = req.body;
    studentModel.create(data, (err, data)=>{
        if(err){
           res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data:data})
        }
    })
}
//readData
exports.readStudent=(req, res)=>{
    const requestQuery=req.query;
    // const query = {};
    const projection ={"name":1, "roll":1,"class":1,"natinonality":1, _id:0}
    studentModel.find(requestQuery, projection, (err, data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        // else if(data=[]){
        //     res.send("data cannot find")
        // }
        else{
            res.status(200).json({status:"success", data: data})
        }
    })
}
//update data
exports.updateStudent=(req, res)=>{
    const id = req.params.id;
    const query = {_id:id};
    const updatedData = req.body;
    //code analysis for testing
    // const find = {_id:id}
    // const query = (find);
    // console.log("id", id, "query",query)
    
    studentModel.updateOne(query, updatedData, (err, data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data:data               })
        }
    })
}
//deleteOne
exports.deleteStudentData=(req, res)=>{
    const id = req.params.id;
    const query = {_id:id}
    studentModel.remove(query, (err, data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data:data})
        }
    })
}









//my addition for post many student data
exports.insertManyStudent=(req, res)=>{
    const data = req.body;
    studentModel.insertMany(data, (err, data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data:data})
        }
    })
}
//read data using mongoose 
exports.getStudentData = (req, res)=>{
    studentModel.find({_id:"624a8572f8d6b1bfd873feaa"},(err, data)=>{
        if(err){
            res.status(400).json({status:"fial", data: err})
        } else{
            res.status(200).json({status:"success", data:data})
        }
    })
}

//update data and this is not right way
exports.updateStudentData=(req, res)=>{
    const reqQuery = req.query;
    const updatedData = req.body;
    studentModel.updateMany(reqQuery,updatedData, (err, data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data:data})
        }
    })
}

//delete operation
exports.deleteStudent=(req, res)=>{
    const id = req.params.id
    const query = {_id:id}
    studentModel.deleteOne(query, (err, data)=>{
        if(err){
            res.status(400).json({"status":"fail", data:err})
        }
        else{
            res.status(200).json({"status":"success", data:data})
        }
    })
}
// const jwt = require('jsonwebtoken');
// //create jwt token
// exports.createToken=(req, res)=>{
//     const payload = {
//         exp: Math.floor(Date.now() / 1000) + (60 * 60),
//         data:{name:"Mohammad Rejaul karim", city:"Dhaka", admin:true},
//     };
//     const token = jwt.sign(payload, "secretkey123");
//     res.send(token)
// }

// //decode jwt token
// exports.decodeToken=(req, res)=>{
//     const token = req.headers["token"];
//     jwt.verify(token, "secretkey123", (err, decode)=>{
//         console.log(decode)
//         res.status(200).json({status:"success", data: decode})
//         if(err){
//            res.status(401).json({status:"fail", data:err})
//         }
//         else{
//            res.status(200).json({status:"success", data: decode})
//         }
//     })


//     res.send(token)
// }

const jwt = require('jsonwebtoken');
//create jwt token
exports.tokenCreate=(req, res)=>{
    let payload = {
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data:{name:"Mohammad Rejaul karim", city:"Dhaka", admin:true},
    };
    let token = jwt.sign(payload, "secretkey123");
    res.send("this is token"+ token)
}
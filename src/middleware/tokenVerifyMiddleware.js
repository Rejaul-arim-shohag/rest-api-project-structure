const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
    const token = req.headers.token;
    jwt.verify(token, "secretkey123", (err, decode) => {
        // res.status(200).json({status:"success", data: decode})
        if (err) {
            res.status(401).json({ status: "fail", data: err })
        }
        else {
            next();

        }
    })


    res.send(token)
}
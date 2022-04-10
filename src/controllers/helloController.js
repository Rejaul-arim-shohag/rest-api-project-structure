
exports.helloGet = (req, res)=>{
    res.status(200).json({"method":"GET","name":"Mohammad Rejaul kaeim", "fatherName":"Mahabub alam"})
}

exports.helloPost = (req, res)=>{
    res.status(200).json({"method":"POST","programmerName":"Mohammad Rejaul karim", "motherName":"Jesmin begum"})
}
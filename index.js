const app = require("./app");
const dotenv =require('dotenv').config({path:'./config.env'});

const port = process.env.RUNNING_PORT|| 8800;

app.listen(port, (req, res)=>{
   console.log(`server running on port ${port}`)
})
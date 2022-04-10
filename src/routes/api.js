const express = require('express');
const router = express.Router();
const helloController = require('../controllers/helloController');
const studentController = require("../controllers/studentController");
const schemaTypes = require("../controllers/schemaTypes");
const countryController = require("../controllers/countryController");
const jwtPractice = require("../controllers/jwtPractice");
const tokenVerifyMiddleware = require("../middleware/tokenVerifyMiddleware")
const tokenCreateController = require("../controllers/tokenCreateController");



//mongoose routes and applied verification
router.get("/tokenCreate", tokenCreateController.tokenCreate);
router.post("/insertStudent",tokenVerifyMiddleware, studentController.insertStudentData);
router.get("/getStudentData",tokenVerifyMiddleware, studentController.readStudent);
router.post("/updateStudent/:id",tokenVerifyMiddleware, studentController.updateStudent);
router.delete("/deleteStudentData/:id",tokenVerifyMiddleware, studentController.deleteStudentData);

//create jwt token
// router.get("/tokenCreate", jwtPractice.createToken);
//decode jwt token, when I call this api, then I recive cannot set headers after they are sent the client
// router.get("/decodeToken", jwtPractice.decodeToken);


//This is my first routing
router.get("/get", helloController.helloGet);
router.post("/post", helloController.helloPost);
//schema types practice route
router.post("/fakeDataPost", schemaTypes.schemaTypesPractice);
router.post("/countryDataPost", countryController.countryInsert);





//my addition for practice
router.post("/insertManyStudent", studentController.insertManyStudent);
router.get("/getStudentData", studentController.getStudentData);
router.put("/updateStudentData", studentController.updateStudentData);
router.delete("/deleteData/:id", studentController.deleteStudent);

module.exports = router;

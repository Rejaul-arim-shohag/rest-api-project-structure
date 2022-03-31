const express = require('express');
const router = express.Router();
const helloController = require('../controllers/helloController');

//This is my first routing
router.get("/get", helloController.helloGet);
router.post("/post", helloController.helloPost);

module.exports = router;

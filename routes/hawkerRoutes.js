const express = require('express');
router = express.Router();
const {handleCreateUser,handleUserLogin,handleHawkerDetails} = require('../controller/hawker');

router.post("/signup",handleCreateUser);
router.post("/login",handleUserLogin);
router.post("/detail",handleHawkerDetails);

module.exports = router;
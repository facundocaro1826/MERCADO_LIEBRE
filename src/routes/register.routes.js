// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
//  "/" raiz 
const { register, login } = require('../controllers/registers');


//   "/register"
router.get('/', register);      //  "/registro"
router.get('/login', login);    //   "/registro/login"

module.exports = router;
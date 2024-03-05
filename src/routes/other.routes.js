// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
//  "/" raiz 

const { home, search } = require('../controllers/other'); 

router.get('/', home ); 
router.get('/buscar', search); 

module.exports = router;

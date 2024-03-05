// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************


const { list, detail } = require('../controllers/products')

/*** OBTENER ALL PRODUCTS  ***/     //-->products
router.get('/', list); 


/*** OBTENER UN PRODUCT ***/ 
router.get('/detalle/:id', detail); 



module.exports = router;

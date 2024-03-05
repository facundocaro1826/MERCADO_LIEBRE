// ************ Require's ************
const express = require('express');
const router = express.Router();
const {uploadProducts} = require('../middlewares/uploadFiles')


// ************ Controller Require ************

const { create, store, edit, update, destroy, safeDelete } = require('../controllers/admin');

/*** CREAR ONE PRODUCT ***/ 
router.get('/crear-producto',create );       //  "/admin"
router.post('/crear-producto', uploadProducts.single('image'), store); 


/*** EDITAR ONE PRODUCT ***/ 
router.get('/editar-producto/:id', edit); 
router.put('/editar-producto/:id', update); 


/*** DELETE ONE PRODUCT***/ 
router.get('/eliminar-producto/:id', safeDelete)
router.delete('/eliminar-producto/:id', destroy); 


module.exports = router;

const express = require('express');
const productos = require('./productosRouter');
const carrito = require('./carritoRouter');
const router = express.Router();

router.use('/productos', productos);
router.use('/carrito', carrito);

module.exports = router;
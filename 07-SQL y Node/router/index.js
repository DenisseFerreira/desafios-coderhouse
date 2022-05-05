const express = require('express');
const productos = require('./productosRouter');
const router = express.Router();

router.use('/productos', productos);

module.exports = router;
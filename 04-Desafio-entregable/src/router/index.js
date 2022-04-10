const express = require('express');
const productos = require('./productos');
const router = express.Router();

router.use('/productos', productos);

module.exports = router;
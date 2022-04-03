const express = require('express');
const {Contenedor} = require ('./../../contenedor');
const router = express.Router();

router.get('/', async (req, res) => {
    const resultado = await Contenedor.getAll();
    res.json({
      resultado,
    });
  });

router.get('/:id', async (req, res) => {
    let valorID = req.params.id;
    const resultado = await Contenedor.getById(valorID);
    res.json({
      resultado,
    });
  });



module.exports = router
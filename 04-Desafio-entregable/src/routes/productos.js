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


  router.post('/', async (req, res) => {
    const newObj2 = {
        title: 'Mouse',
        price: 1000,
        thumnail:'https://www.google.com/aclk?sa=l&ai=DChcSEwie9Kjxz9j2AhUWCJEKHYZGBdEYABAJGgJjZQ&sig=AOD64_0Vxc6DuYJbci5Q5RSdpQ2O_3ZL5g&adurl&ctype=5&ved=2ahUKEwiemZHxz9j2AhWGSbgEHWyaD1wQvhd6BAgBEHo'
    }
    const resultado = await Contenedor.save(newObj2);
    res.json({
      resultado,
    });
  });

//   router.put('/:id', async (req, res) => {
//     const valorID = req.params.id;
//     const resultadoDelete = await Contenedor.deleteById(valorID);
//     const newObj= {
//         id: valorID,
//         title: 'Linterna',
//         price: 3000,
//         thumnail:'https://www.google.com/aclk?sa=l&ai=DChcSEwie9Kjxz9j2AhUWCJEKHYZGBdEYABAJGgJjZQ&sig=AOD64_0Vxc6DuYJbci5Q5RSdpQ2O_3ZL5g&adurl&ctype=5&ved=2ahUKEwiemZHxz9j2AhWGSbgEHWyaD1wQvhd6BAgBEHo'
//     }

//     const resultadoSave = await Contenedor.save(newObj);
//     res.json({
//         resultadoSave,
//     });
//   });

  router.delete('/:id', async (req, res) => {
    const valorID = req.params.id;
    const resultadoDelete = await Contenedor.deleteById(valorID);
    res.json({
        resultadoDelete,
    });
  });

module.exports = router
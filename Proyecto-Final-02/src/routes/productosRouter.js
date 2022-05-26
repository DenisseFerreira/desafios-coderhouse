import { Router } from 'express';
import { getAllProducts, getProductById, createProduct, deleteProduct } from '../controller/productosController';

const router = Router();


router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.delete('/:id', deleteProduct);


// router.post('/', async (req, res) => {
// // const  nombre = req.body.nombre;
// const { nombre, descripcion, codigo, foto, precio, stock } = req.body;  //desestructuracion (sino hay que hacer uno por uno)

// if (!nombre || !descripcion || !codigo || !foto || !precio || !stock)
// return res.status(400).json({
//   msg: 'Falta un campo en el Body',
// });

// const newProduc = {
//   nombre,
//   descripcion,
//   codigo,
//   foto, 
//   precio, 
//   stock
// };

// const resultado = await ContenedorController.save(newProduc);

// res.json({
//   msg: 'Se agregó un prodcuto nuevo al contenedor',
// });
// });

// router.put('/:id', async (req, res) => {
// const { id } = req.params;
// const { nombre, descripcion, codigo, foto, precio, stock } = req.body;
// const resultado = await ContenedorController.getById(id);

// if(!resultado)
// return res.status(404).json({
//   msg:"Producto no encontrado"
// });
// if (!nombre || !descripcion || !codigo || !foto || !precio || !stock)
// return res.status(400).json({
//   msg: 'Falta nombre, precio o link de imagen en el Body',
// });

// const newProduc = {
//   nombre,
//   descripcion,
//   codigo, 
//   foto, 
//   precio, 
//   stock
// };
// const resultadoUpDate = await ContenedorController.upDate(id, newProduc);
// res.json({
//   resultadoUpDate,
// });
// });


export default router;

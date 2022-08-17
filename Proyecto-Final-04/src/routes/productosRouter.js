import { Router } from 'express';
import { getAllProducts, getProductById, createProduct, deleteProduct, updateProduct } from '../controller/productosController';

const router = Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.delete('/:id', deleteProduct);
router.put('/:id', updateProduct);

export default router;

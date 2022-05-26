import { ProductosModel } from '../models/productos';
import { CarritoModel } from '../models/carritos';

export const getAllProducts = async (req, res) => {
    const q1 = await ProductosModel.find();
    res.json({
        data: q1,
      });
};

export const getProductById = async (req, res) => {
    const { id } = req.params;
    const item = await ProductosModel.findById(id);
    res.json({
        data: item,
      });
};

//problemas con el carritoID
export const createProduct = async (req, res) => {

    console.log('req.body', req.body);
    const { nombre, precio, descripcion, codigo, stock, foto, carritoId } = req.body;
    
    const newProduct  = await ProductosModel.create({
        nombre,
        descripcion,
        codigo,
        foto, 
        precio, 
        stock,
        carritoId
      });

      res.json({
        data: newProduct,
      });
};

export const deleteProduct = async (req, res) => {
    try {
      const { id } = req.params;
  
      await ProductosModel.findByIdAndDelete(id);
  
      res.json({
        msg: 'Producto eliminado',
      });
    } catch (err) {
      res.status(500).json({
        error: err.message,
        stack: err.stack,
      });
    }
};


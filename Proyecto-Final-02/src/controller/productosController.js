import { ProductosModel } from '../models/productos';

export const getAllProducts = async (req, res) => {
    const q1 = await ProductosModel.find();
    res.json({
        Productos: q1,
      });
};

export const getProductById = async (req, res) => {
    const { id } = req.params;
    const item = await ProductosModel.findById(id);
    res.json({
        data: item,
      });
};

export const createProduct = async (req, res) => {
    const { nombre, precio, descripcion, codigo, stock, foto } = req.body;
    
    const newProduct  = await ProductosModel.create({
        nombre,
        descripcion,
        codigo,
        foto, 
        precio, 
        stock
      });

      res.json({
        NewProducto: newProduct,
      });
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  await ProductosModel.findByIdAndDelete(id);

  res.json({
    msg: 'Producto eliminado',
  });
};

export const updateProduct = async (req,res)=>  {
  const { id } = req.params;
  const { nombre, precio, descripcion, codigo, stock, foto } = req.body;
  const newProduc = {
    nombre,
    descripcion,
    codigo, 
    foto, 
    precio, 
    stock
  };

  const resultadoUpDate = await ProductosModel.findByIdAndUpdate(
    { _id: id },
   newProduc
  );
 
  res.json({
    resultadoUpDate,
  });
}


import { CarritoModel } from '../models/carritos';
import { ProductosModel } from '../models/productos';

export const getAllCarrito = async (req, res) => {
  const carritos = await CarritoModel.find();
  res.json({
    Carritos: carritos,
    });
 }

export const crearCarrito = async (req, res) => {
    const carrito = {
        productos:[]
    }
    const newCarrito = await CarritoModel.create(carrito);
      res.json({
        Carrito: newCarrito,
      });

}

export const deleteCarrito = async (req, res) => {
  const { id } = req.params;

  await CarritoModel.findByIdAndDelete(id);

  res.json({
    msg: 'Carrito eliminado',
  });

}

export const agregarProducto = async (req, res) => {
  const { id } = req.params;
  const { idProducto, cantidad } = req.body;

  const miCarrito = await CarritoModel.findById(id);
  // console.log('actualizar carrito', miCarrito.productos);
  miCarrito.productos.push({idProducto, cantidad}); // para eliminar hacer un filter y actualizar
  // console.log('nuevo producto agregado', miCarrito.productos);

  const productUpdated = await CarritoModel.findByIdAndUpdate(
    { _id: id },
    miCarrito
  );

  res.json({
    Carrito: productUpdated,
    msg: "Producto agregado al carrito",
  });

}

export const getAllProductosCarrito = async (req, res) => {
 const { id } = req.params;
 let oneCarrito = await CarritoModel.findById(id);
 let misProductos = [];
 let detailProductos;
 
 for(let i = 0; i < oneCarrito.productos.length; i++){
   // Detalles del producto
   detailProductos = await ProductosModel.findById(oneCarrito.productos[i].idProducto);
   misProductos.push(detailProductos);
}
// console.log('detailProductos', misProductos);
 res.json({
   ProductosDelCarrito: misProductos,
   msg: 'Productos del carrito',
 });
 
}

export const deleteProducto = async (req, res) => {
  const { id, idProducto } = req.params;

  const miCarrito = await CarritoModel.findById(id);
  miCarrito.productos = miCarrito.productos.filter(cadaProducto =>
    cadaProducto.idProducto != idProducto );
  const productUpdated = await CarritoModel.findByIdAndUpdate(
    { _id: id },
    miCarrito
  );
  res.json({
    nuevoCarrito:productUpdated,
    msg: "Producto eliminado del carrito",
  });

}
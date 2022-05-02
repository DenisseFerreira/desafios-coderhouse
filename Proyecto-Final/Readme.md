



# Endpoints utilizados en esta app

## Productos: 
#### **Visualizar todos los productos**
>GET localhost:8080/api/productos

#### **Busqueda de producto por id**
>GET localhost:8080/api/productos/0041a615-7a80-47be-8418-f6c90b48b70f

#### **Incorporar producto al listado**
>POST localhost:8080/api/productos

#### **Actualizar un producto**
>PUT localhost:8080/api/productos/79ad51b6-6e51-4c93-8d1d-f461e75c4403

#### **Eliminar un producto**
>DELETE  localhost:8080/api/productos/0041a615-7a80-47be-8418-f6c90b48b70f


## Carrito
#### **GET Crear un carrito**
>localhost:8080/api/carrito

#### **DELETE Eliminar un carrito**
>localhost:8080/api/carrito/d4f02831-6e07-4ba9-8d71-17b30c9fca95

#### **GET Todos los productos del carrito**
>localhost:8080/api/carrito/bd6f17e3-fd8f-4ba5-aa7e-a7f524cd05de/productos

#### **POST Agregar productos al carrito**
>localhost:8080/api/carrito/bd6f17e3-fd8f-4ba5-aa7e-a7f524cd05de/productos

#### **DELETE Eliminar producto del carrito**
>localhost:8080/api/carrito/c9cae400-f41d-417b-b0b9-4f3f7529f817/productos/0041a615-7a80-47be-8418-f6c90b48b70f
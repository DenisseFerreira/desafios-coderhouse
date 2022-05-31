
# Endpoints utilizados en esta app

## Productos: 
#### **Visualizar todos los productos**
>GET localhost:8080/api/productos

#### **Busqueda de producto por id**
>GET localhost:8080/api/productos/628dc0887950fd404cc30e45

#### **Incorporar producto al listado**
>POST localhost:8080/api/productos

#### **Actualizar un producto**
>PUT localhost:8080/api/productos/628dc0887950fd404cc30e48

#### **Eliminar un producto**
>DELETE  localhost:8080/api/productos/628dc0887950fd404cc30e4c


## Carrito
#### **GET Todos los carritos**
>localhost:8080/api/carrito

#### **POST Crear un carrito**
>localhost:8080/api/carrito

#### **DELETE Eliminar un carrito**
>localhost:8080/api/carrito/628fae0ad8dd151ce78a88fa

#### **GET Todos los productos del carrito**
>localhost:8080/api/carrito/628fa9864a9578f68e7235d3/productos

#### **POST Agregar productos al carrito**
>localhost:8080/api/carrito/628fa9864a9578f68e7235d3/productos

#### **DELETE Eliminar producto del carrito**
>localhost:8080/api/carrito/628fa9864a9578f68e7235d3/productos/628dc0887950fd404cc30e4b
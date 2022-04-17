const productos = [
    { id: 1, nombre: 'Escuadra', precio: 323.5 },
    { id: 2, nombre: 'Calculadora', precio: 234.1 },
    { id: 3, nombre: 'Globo Terraqueo', precio: 18.5 },
    { id: 4, nombre: 'Paleta Pintura', precio: 56.8 },
    { id: 5, nombre: 'Reloj', precio: 200 },
  ];

  //Los nombres de los productos en un string separados por comas.
  let nombreProductos = [];

  for (let i = 0; i < productos.length; i++) {
      const element = productos[i].nombre;
      nombreProductos.push(element);
  }
  console.log(`Los nombres de los productos son: ${nombreProductos.join(', ')}`);



// B) La suma total de todos los precios
// const sumaTotal;

// precioTotal/ precioTotal.length
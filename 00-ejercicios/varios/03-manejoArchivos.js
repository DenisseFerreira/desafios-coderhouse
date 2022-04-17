// Crear un proyecto en node.js que genere 10000 números
//  aleatorios en el rango de 1 a 20.

// Crear un objeto cuyas claves sean los números salidos y el 
// valor asociado a cada clave será la cantidad de veces que 
// salió dicho número.
// Representar por consola los resultados

const between = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

let guardoNumSalidos = [];
let numSalidos = between(1,20);
guardoNumSalidos.push(guardoNumSalidos);

miObjt = {
    
}




console.log(guardoNumSalidos);
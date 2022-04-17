// class Persona {

//     nombre;
//     edad;
  
//     constructor(nombre, edad) {
//       this.nombre = nombre;
//       this.edad = edad;
//     }
  
//     static esPersona(posiblePersona) {
//       if (
//         posiblePersona.nombre &&
//         typeof posiblePersona.nombre === 'string' &&
//         posiblePersona.edad &&
//         typeof posiblePersona.edad === 'number' &&
//         posiblePersona.edad > 0
//       )
//         return true;
//       else return false;
//     }
  
//     saludar() {
//       return `Hola! me llamo ${this.nombre} y tengo ${this.edad} años`;
//     //   console.log(`Hola! me llamo ${this.nombre} y tengo ${this.edad} años`);
//     }
//   }
  
//   const persona1 = new Persona('juan carlos', 28);
// //   const persona2 = new Persona('pepe', 15);
  
//   console.log(persona1.saludar());
// //   persona2.saludar();
  
//   const data = {
//     nombre: 'juan',
//     edad: 15,
//   };
  
//   console.log(Persona.esPersona(data));

// const logger = (mensaje) => {
//   // console.log('mensaje', mensaje);
//   const fecha = new Date();
//   console.log(`${fecha} : ${mensaje}`)
// }


// const miFuncion = (nombre, logger) => { //  1. le pasa el nombre y en cb le pasa 
//                                     //    la FUNCION logger
//   // console.log('NOMBRE', nombre);
//   // console.log('cb', cb); sale function: logger 

//   const mensaje = `Hola ${nombre}!!!!`;
//   logger(mensaje);
// }


// miFuncion('juan carlos', logger)


// Escribiendo setTimeOut deglosado
const funTiempo = () => {
  console.log(new Date(),"EJECUTANDO FUNCION DEMORADA")
}
setTimeout(funTiempo, 2000);
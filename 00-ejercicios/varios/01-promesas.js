// function dividir(dividendo, divisor) {
//     return new Promise((resolve, reject) => {
//       if (divisor == 0) {
//         reject('no se puede dividir por cero')
//       } else {
//         resolve(dividendo / divisor)
//       }
//     })
//    }

//    dividir(10, 2)  //me retorna una promesa, puedo usar
//                   // el then y cath para obtener su valor
//    .then(resultado => {
//      console.log(`resultado: ${resultado}`)
//    })
//    .catch(error => {
//      console.log(`error: ${error}`)
//    })


// const delay = ret => {
//     // console.log(ret*3e6); //300000000
//     for(let i=0; i<ret*3e6; i++);
// }

// function hacerTarea(num) {
//     console.log('haciendo tarea ' + num)
//     delay(100)  // este es el que se pasa como ret
// }

// console.log('inicio de tareas');
// hacerTarea(1)
// hacerTarea(2)
// hacerTarea(3)
// hacerTarea(4)
// console.log('fin de tareas')
// console.log('otras tareas ...')


function hacerTarea(num, cb) {
    console.log('haciendo tarea ' + num, cb)
    setTimeout(cb,100)
}

console.log('inicio de tareas');
hacerTarea(1, () => {
    hacerTarea(2, () => {
        hacerTarea(3, () => {
            hacerTarea(4, () => {
                console.log('fin de tareas')
            })
        })
    })
})
console.log('otras tareas ...')
  
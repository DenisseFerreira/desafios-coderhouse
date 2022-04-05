const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
class Contenedor {

    constructor(){
        this.misObjetos= [];
        this.archivo = `./productos.txt`;
        this.existe();

        const data = {
            misObjetos: this.misObjetos,
            archivo: this.archivo
        }
        fs.writeFileSync(this.archivo, JSON.stringify(data, null, '\t'));
    }

    readFile(){
        const data =  fs.readFileSync(this.archivo, 'utf-8');
        return JSON.parse(data);
    }
    writeFile(data){
        fs.writeFileSync(this.archivo, JSON.stringify(data, null, '\t'));
    }

    async readFileAsync (){
        const data = await fs.promises.readFile(this.archivo, 'utf-8');
        return JSON.parse(data);
      }
    async writeFileAsync(data){
        return await fs.writeFileSync(this.archivo, JSON.stringify(data, null, '\t'));
    }

    existe(){
        const fileExists = fs.existsSync(this.archivo);
        if(fileExists){
            const data = this.readFile();
            console.log(`Archivo ${this.archivo} existe, inicializo con el archivo`);
            this.misObjetos = data.misObjetos;
        } else {
            console.log('Archivo no existe. creando uno nuevo');
            this.misObjetos= [];
            this.archivo = `./productos.txt`;
        }
    }

    async save(newObj){
        const data = await this.readFileAsync();

        const p = {
            id: uuidv4(),
            title: newObj.title,
            price: newObj.price,
            thumnail: newObj.thumnail          
        }

        data.misObjetos.push(p);

        this.writeFileAsync(data);
        return `El id asignado es ${p.id}`;
    }

    async getById(id){
    const data =  await this.readFileAsync();

    for (let i = 0; i < data.misObjetos.length; i++) {
        const element = data.misObjetos[i];
        if(element.id === id) return element;
    }
    return null;
    }

    async getAll(){
        const data = await this.readFileAsync();
        return data.misObjetos;
    }

    async deleteById(id){ //no debe retornar
        const data = await this.readFileAsync();
        let conelID = data.misObjetos.filter((item) => item.id == id );
        data.misObjetos = data.misObjetos.filter((item) => item.id !== id );
        if(conelID[0].id === id){
            data.misObjetos;
            this.writeFileAsync(data);
            return conelID;
        }else{
            return null;
        }
    }

    async deleteAll(){//no debe retornar
        const data = await this.readFileAsync();//no es necesario leer
        data.misObjetos = [];
        this.writeFileAsync(data);
        return data.misObjetos;
    }
}

const miContenedor = new Contenedor();
const newObj = {
    title: 'Regla',
    price: 1000,
    thumnail:'https://www.google.com/aclk?sa=l&ai=DChcSEwie9Kjxz9j2AhUWCJEKHYZGBdEYABAJGgJjZQ&sig=AOD64_0Vxc6DuYJbci5Q5RSdpQ2O_3ZL5g&adurl&ctype=5&ved=2ahUKEwiemZHxz9j2AhWGSbgEHWyaD1wQvhd6BAgBEHo'
}

miContenedor.save(newObj).then((data) =>{
    console.log(data);
}).catch((err) => {
    console.log('Error al guardar', err);
})

miContenedor.getById('').then((data) =>{
    console.log('El producto segun el id entregado es: ', data);
}).catch((err) => {
    console.log('Error al buscar el id', err);
})

miContenedor.getAll().then((data) =>{
    // console.log('Mostrando TODOS los productos: ', data);
}).catch((err) => {
    console.log('Error al mostrar TODOS los productos:', err);
})

// miContenedor.deleteById('96149d68-474c-440b-ad46-d41df917245c').then((data) =>{
//     console.log('Eliminando segun el id: ', data);
// }).catch((err) => {
//     console.log('Error al eliminar por id', err);
// })

// miContenedor.deleteAll().then((data) =>{
//     console.log('Eliminando TODOS los productos ', data);
// }).catch((err) => {
//     console.log('Error al eliminar todos los productos', err);
// })



// const salida = pepe.map((a) => a.id);

// console.log(salida);

// const random = between(0, salida.length);

// console.log('RANDOM', random);

// const idRandom = salida[random];

// console.log('IDRANDOM', idRandom);


module.exports = {
    Contenedor: miContenedor,
}

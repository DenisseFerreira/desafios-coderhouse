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

    async upDate(id, nuevaData) {
        // console.log('nuevaData', nuevaData);
        const data = await this.readFileAsync();
        const productos = data.misObjetos;

        const indice = productos.findIndex((unProducto) => unProducto.id === id);
        
        if (indice < 0) throw new Error('no existe el producto');

        const productUpdated = {
            id,
            ...nuevaData,
          };
        
        productos.splice(indice, 1, productUpdated);
        await this.writeFileAsync(data)
        return productUpdated;
        // return data.misObjetos;
    }
}

const miContenedorController = new Contenedor();
const newObj = {
    title: 'Regla2',
    price: 50,
    thumnail:'httpsdddd://www.google.com/aclk?sa=l&ai=DChcSEwie9Kjxz9j2AhUWCJEKHYZGBdEYABAJGgJjZQ&sig=AOD64_0Vxc6DuYJbci5Q5RSdpQ2O_3ZL5g&adurl&ctype=5&ved=2ahUKEwiemZHxz9j2AhWGSbgEHWyaD1wQvhd6BAgBEHo'
}

miContenedorController.upDate('1cda4705-0578-4d2c-8f86-b5bcb309896b', newObj).then((data) =>{
    // console.log('UPDATE', data);
}).catch((err) => {
    console.log('Error al guardar', err);
})

// miContenedorController.save(newObj).then((data) =>{
//     console.log(data);
// }).catch((err) => {
//     console.log('Error al guardar', err);
// })

// miContenedorController.getById('').then((data) =>{
//     console.log('El producto segun el id entregado es: ', data);
// }).catch((err) => {
//     console.log('Error al buscar el id', err);
// })

// miContenedorController.getAll().then((data) =>{
//     // console.log('Mostrando TODOS los productos: ', data);
// }).catch((err) => {
//     console.log('Error al mostrar TODOS los productos:', err);
// })

// miContenedorController.deleteById('96149d68-474c-440b-ad46-d41df917245c').then((data) =>{
//     console.log('Eliminando segun el id: ', data);
// }).catch((err) => {
//     console.log('Error al eliminar por id', err);
// })

// miContenedorController.deleteAll().then((data) =>{
//     console.log('Eliminando TODOS los productos ', data);
// }).catch((err) => {
//     console.log('Error al eliminar todos los productos', err);
// })


module.exports = {
    ContenedorController: miContenedorController,
}
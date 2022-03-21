const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
class Contenedor {

    constructor(){
        this.misObjetos= [];
        this.archivo = `./productos.json`;

        this.existe();

        const data = {
            misObjetos: this.misObjetos,
            archivo: this.archivo
        }
        fs.writeFileSync(this.archivo, JSON.stringify(data, null, '\t'));
    }

    // lee lo que tiene escrito en el archivo, en la data va el path
    readFile(){
        const data =  fs.readFileSync(this.archivo, 'utf-8');
        return JSON.parse(data);
    }

    async readFileAsync (){
        const data = await fs.promises.readFile(this.archivo, 'utf-8');
        return JSON.parse(data);
      }

    // toma el archivo y escribe lo que esta en data
    writeFile(data){
        fs.writeFileSync(this.archivo, JSON.stringify(data, null, '\t'));
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
            this.archivo = `./productos.json`;
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

    // getById(id){
    //     for (let i = 0; i < this.misObjetos.length; i++) {
    //         const element = this.misObjetos[i];
    //         if(element.id === id) return element;
    //     }
    //     return null;
    // }
    // getAll(){
    //     return this.misObjetos;
    // }
    // deleteById(id){
    //    return this.misObjetos.filter((item) => item.id !== id);
    // }
    // deleteAll(){
    //     return this.misObjetos = [];
    // }

    async getById(id){
    const data =  await this.readFileAsync();

    for (let i = 0; i < data.misObjetos.length; i++) {
        const element = data.misObjetos[i];
        if(element.id === id) return element;
    }
    return `El articulo es null`;
    }

    async getAll(){
        const data = await this.readFileAsync();
        return data.misObjetos;
    }

    // Elimina por id
    async deleteById(id){
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

    // Elimina todo
    async deleteAll(){
        const data = await this.readFileAsync();
        data.misObjetos = [];
        this.writeFileAsync(data);
        return data.misObjetos;
        // return `Elimino todos ${data.misObjetos}`;
    }
}
const miContenedor = new Contenedor();
const newObj = {
    title: 'Escuadra2',
    price: 1000,
    thumnail:'https://www.google.com/FiUIARDXAQ'
}

miContenedor.save(newObj).then((data) =>{
    console.log(data);
}).catch((err) => {
    console.log('Error al guardar', err);
})

miContenedor.getById('ee6c1715-235c-4241-b193-e50ee91256b5').then((data) =>{
    console.log('El producto segun ese id es: ', data);
}).catch((err) => {
    console.log('Error al buscar el id', err);
})

miContenedor.getAll().then((data) =>{
    console.log('Mostrando TODOS los productos: ', data);
}).catch((err) => {
    console.log('Error al mostrar TODOS los productos:', err);
})

miContenedor.deleteById('3').then((data) =>{
    console.log('Eliminando segun el id: ', data);
}).catch((err) => {
    console.log('Error al eliminar por id', err);
})

miContenedor.deleteAll().then((data) =>{
    console.log('Eliminando TODOS los productos ', data);
}).catch((err) => {
    console.log('Error al eliminar todos los productos', err);
})


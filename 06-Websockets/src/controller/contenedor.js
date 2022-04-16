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

    async getAll(){
        const data = await this.readFileAsync();
        return data.misObjetos;
    }

}

const miContenedorController = new Contenedor();
// miContenedorController.save(newObj).then((data) =>{
//     console.log(data);
// }).catch((err) => {
//     console.log('Error al guardar', err);
// })


module.exports = {
    ContenedorController: miContenedorController,
}
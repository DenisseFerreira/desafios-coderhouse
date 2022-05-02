const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const {ContenedorController} = require ('../controller/productosController');

class Carrito {
    constructor(){
        this.carritos= [];
        this.archivoCarritos = `./carritos.txt`;
        this.existe();
        const data = {
            carritos: this.carritos,
            archivoCarritos: this.archivoCarritos
        }
        fs.writeFileSync(this.archivoCarritos, JSON.stringify(data, null, '\t'));  
    }
    readFile(){
        const data =  fs.readFileSync(this.archivoCarritos, 'utf-8');
        return JSON.parse(data);
    }
    writeFile(data){
        fs.writeFileSync(this.archivoCarritos, JSON.stringify(data, null, '\t'));
    }

    async readFileAsync (){
        const data = await fs.promises.readFile(this.archivoCarritos, 'utf-8');
        return JSON.parse(data);
      }
    async writeFileAsync(data){
        return await fs.writeFileSync(this.archivoCarritos, JSON.stringify(data, null, '\t'));
    }

    existe(){
        const fileExists = fs.existsSync(this.archivoCarritos);
        if(fileExists){
            const data = this.readFile();
            console.log(`Archivo ${this.archivoCarritos} existe`);
            this.carritos = data.carritos;
        } else {
            console.log(`Archivo ${this.archivoCarritos} no existe. creando uno nuevo`);
            this.carritos= [];
            this.archivoCarritos = `./carritos.txt`;
        }
    }

    async crearCarrito(){
        const data = await this.readFileAsync();       

        const carrito = {
            idCarrito: uuidv4(),
            fecha: Date.now(),
            productos:[]
        }

        data.carritos.push(carrito);
        this.writeFileAsync(data);
        return `${carrito.idCarrito}`;
    }

    async deleteByIdCarrito(id){ //no debe retornar - Vacía un carrito y lo elimina.
        const data = await this.readFileAsync();
        let conelID = data.carritos.filter((item) => item.idCarrito == id );
        data.carritos = data.carritos.filter((item) => item.idCarrito !== id );
        if(conelID[0].idCarrito === id){
            data.carritos;
            this.writeFileAsync(data);
            return conelID;
        }else{
            return null;
        }
    }

    async getAllProductosCarrito(id){
        const data = await this.readFileAsync();
        const totalCarritos = data.carritos;
        let oneCarrito;
        let detailProductos;
    
        for (let i = 0; i < totalCarritos.length; i++) { // Recorrer el array y encontrar el idCarrito
            const element = totalCarritos[i]; //recorre y muestra todos los carritos
            if(element.idCarrito === id)  //ingresa a cada carrito y compara su id
            oneCarrito = element;  //el elemento completo, carrito con TODOS sus productos
        }
        // console.log('PRIMER for',oneCarrito);
        for(let i = 0; i < oneCarrito.productos.length; i++){ // Recorrer y mostrar los productos que hay en el carrito 
           // Detalles del producto
        detailProductos = await ContenedorController.getById(oneCarrito.productos[i].idProducto);
           oneCarrito.productos[i].nombre =  detailProductos.nombre;
           oneCarrito.productos[i].descripcion =  detailProductos.descripcion;
           oneCarrito.productos[i].codigo =  detailProductos.codigo;
           oneCarrito.productos[i].foto =  detailProductos.foto;
           oneCarrito.productos[i].precio =  detailProductos.precio;
           oneCarrito.productos[i].stock = detailProductos.stock;
        }
        console.log('AFUERA DEL for', oneCarrito);
        return oneCarrito;
    }

    async save( id, carritoProducto){
        const data = await this.readFileAsync(); //leyendo archivo de carrito
        let newCarrito;
        for (let i = 0; i < data.carritos.length; i++) {
            const element = data.carritos[i];
            if(element.idCarrito === id) 
            newCarrito = element;
        }
        // console.log(newCarrito);
         newCarrito.productos.push({"idProducto":carritoProducto.idProducto, "cantidad": carritoProducto.cantidad, "fecha": carritoProducto.fecha});
        await this.writeFileAsync(data);
    }

    async deleteByIdProducto(id_carrito, id_producto){ //Elimina producto dentro del carrito
        const data = await this.readFileAsync();
        data.carritos.forEach(cadaCarrito => {
            if(cadaCarrito.idCarrito === id_carrito) {
                cadaCarrito.productos = cadaCarrito.productos.filter(cadaProducto =>  cadaProducto.idProducto != id_producto )
            }
        });
        // console.log(data);
        this.writeFileAsync(data);
    }


}

const carritoController = new Carrito();

module.exports = {
    CarritoController: carritoController,
}
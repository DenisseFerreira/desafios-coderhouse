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
        // return data.carrito;
        const totalCarritos = data.carritos;
        let newCarrito;
        // let carritoParaMostrar = data.misObjetos.filter((item) => item.idProducto == id );
        for (let i = 0; i < totalCarritos.length; i++) {
            const element = totalCarritos[i];
            if(element.idCarrito === id) 
            newCarrito = element;
        }
        for(let i = 0; i < newCarrito.productos.length; i++){
           // leer detalles del producto
        let buscaProducto = await ContenedorController.getById(newCarrito.productos[i].idProducto);
              console.log('buscaProducto', buscaProducto);

            return newCarrito.productos[i] = buscaProducto;
           // agregar al productos de salida en new carrito
           
        //    newCarrito.productos[i].nombre =  buscaProducto.nombre;
        //    newCarrito.productos[i].descripcion =  buscaProducto.descripcion;
        //    newCarrito.productos[i].codigo =  buscaProducto.codigo;
        //    newCarrito.productos[i].foto =  buscaProducto.foto;
        //    newCarrito.productos[i].precio =  buscaProducto.precio;
        //    newCarrito.productos[i].thumnail = buscaProducto.thumnail;
        //    newCarrito.productos[i].stock = buscaProducto.stock;

        }
        return newCarrito;
    }

    async save( id, carritoProducto){
        const data = await this.readFileAsync(); //leyendo archivo de carrito
        let newCarrito;
        for (let i = 0; i < data.carritos.length; i++) {
            const element = data.carritos[i];
            if(element.idCarrito === id) 
            newCarrito = element;
        }
        console.log(newCarrito);
         newCarrito.productos.push({"idProducto":carritoProducto.idProducto, "cantidad": carritoProducto.cantidad});
        await this.writeFileAsync(data);
    }


}

const carritoController = new Carrito();
// const newCarrito = {
//     title: 'Regla2',
//     price: 50,
//     thumnail:'httpsdddd://www.google.com/aclk?sa=l&ai=DChcSEwie9Kjxz9j2AhUWCJEKHYZGBdEYABAJGgJjZQ&sig=AOD64_0Vxc6DuYJbci5Q5RSdpQ2O_3ZL5g&adurl&ctype=5&ved=2ahUKEwiemZHxz9j2AhWGSbgEHWyaD1wQvhd6BAgBEHo'
// }

// carritoController.save(newCarrito).then((data) =>{
//     console.log(data);
// }).catch((err) => {
//     console.log('Error al guardar', err);
// })


module.exports = {
    CarritoController: carritoController,
}


// "dateCarrito": "fecha Carrito",
// "producto" :{
//     "dateProducto": "fecha producto",
//     "name": "Goma de borrar",
//     "description": "Producto para borrar",
//     "codigo": 5678,
//     "thumnail": "https://www.google.com/aclk?sa=l&ai",
//     "price": 600, 
//     "stock": 4
// }
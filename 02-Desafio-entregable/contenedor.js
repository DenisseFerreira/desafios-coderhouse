class Contenedor {

    constructor(){
        this.misObjetos= [];
    }

    save(nuevoProducto){
        const p = {
            id: this.misObjetos.length +1,
            title: nuevoProducto.title,
            price: nuevoProducto.price,
            thumnail: nuevoProducto.thumnail          
        }
        this.misObjetos.push(p);
        return p.id;
    }

    getById(id){
        for (let i = 0; i < this.misObjetos.length; i++) {
            const element = this.misObjetos[i];
            if(element.id === id) return element;
        }
        return null;
    }
    getAll(){
        return this.misObjetos;
    }
    // Elimina por id
    deleteById(id){
       return this.misObjetos.filter((item) => item.id !== id);
    }
    // Elimina todo
    deleteAll(){
        return this.misObjetos.filter((item) => item !== item);
    }
}
const miContenedor = new Contenedor();

const nuevoProducto = {
    title: 'Escuadra',
    price: 1000,
    thumnail:'https://www.google.com/FiUIARDXAQ'
}

const salida = miContenedor.save(nuevoProducto);
miContenedor.save(nuevoProducto);
miContenedor.save(nuevoProducto);
console.log(salida);
const idDelObjeto = miContenedor.getById(1);
console.log(idDelObjeto);
const array_objetos = miContenedor.getAll();
console.log(array_objetos);
console.log(miContenedor.deleteById(3));
console.log(miContenedor.deleteAll());



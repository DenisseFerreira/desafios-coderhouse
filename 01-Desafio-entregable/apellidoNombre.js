class Usuario {
    nombre;
    apellido;
    libros;
    mascotas;

    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    // constructor(nombre, apellido) {
    //     this.nombre = nombre;
    //     this.apellido = apellido;
    //     this.libros = [];
    //     this.mascotas = [];
    // }

    getFullName = () => `Hola! me llamo ${this.nombre} ${this.apellido}`;
    
    addMascota(nombreMascota){
        this.mascotas.push(nombreMascota);
    }
    
    countMascotas() {
        return `Las cantidad de mascotas son ${this.mascotas.length} y sus nombres son: ${this.mascotas.join(', ')}`;
    }

    addBook(libro) {
        this.libros.push(libro);
        return this.libros;
    }

    getBookNames() {
        // this.books.map(aBook => aBook.name)
        let nombresArrayLibros = [];
        for (let i = 0; i < this.libros.length; i++) {
            nombresArrayLibros.push(this.libros[i].nombre);
        }
        return `Los nombres de los libros son: ${nombresArrayLibros.join(', ')}`;
    }

}
const usuario = new Usuario('Denisse', 'Ferreira', 
                          [{nombre: 'El gatito con botas', autor: 'Elizabeth Donoso'}] ,
                          ['mariposa', 'kety'] );

console.log(usuario.getFullName());
usuario.addMascota('perri');
console.log(usuario.countMascotas());
const nameBook = {nombre: 'Un perro confundido', autor:'Sofia Donoso'};
usuario.addBook(nameBook); // se deben agregar 2 strings
console.log(usuario.getBookNames());














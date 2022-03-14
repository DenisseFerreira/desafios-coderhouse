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
        let nombresArrayLibros = [];
        for (let i = 0; i < this.libros.length; i++) {
            nombresArrayLibros.push(this.libros[i].nombre);
        }
        return `Los nombres de los libros son: ${nombresArrayLibros.join(', ')}`;
    }

}
const usuario = new Usuario('Denisse', 'Ferreira', 
                          [{nombre: 'El gatito con botas',
                             autor: 'Elizabeth Donoso'}] ,
                          ['mariposa', 'kety'] );

console.log(usuario.getFullName());
usuario.addMascota('perri');
console.log(usuario.countMascotas());
usuario.addBook({nombre: 'Un perro confundido', autor:'Sofia Donoso'});
console.log(usuario.getBookNames());











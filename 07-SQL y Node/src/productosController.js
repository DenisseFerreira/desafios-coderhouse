const { options } = require('../options/mariaDB');
const knex = require('knex')(options);
class Contenedor {

    constructor(){}

     async save(newObj){
        const p = {
            nombre: newObj.nombre,
            descripcion: newObj.descripcion,
            codigo: newObj.codigo,
            foto: newObj.foto,
            precio: newObj.precio, 
            stock: newObj.stock       
        }
        return knex('productos').insert(p)
        .then(() => console.log('Data insertada'))
        .catch((err) => {
          console.log('Error al insertar una tabla');
          console.log(err);
        })
        .finally(() => {
          knex.destroy();
        });
        
    }

    async getById(id){
        return knex('productos').select('*').where('idProducto', id);
    }

    async getAll(){
        return knex('productos').select('*');
    }

    async deleteById(id){
       return knex('productos').del().where('idProducto', id);
    }

    async deleteAll(){
        return knex('productos').del()
        .then(() => console.log('Eliminando todos los productos'))
        .catch((err) => {
          console.log('Error', err);
        })
        .finally(() => {
          knex.destroy();
        });
    }

    async upDate(id, nuevaData) {
        return knex('productos').where('idProducto', id).update(nuevaData);
    }
}

const miContenedorController = new Contenedor();
module.exports = {
    ContenedorController: miContenedorController,
}
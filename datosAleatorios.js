const url = "mongodb+srv://herlindavid269:herlin.2004@sena.ahhwqpe.mongodb.net/?retryWrites=true&w=majority"
   
// Insertando datos aleatorios
async function insertarRegistros(registrosNuevos, nombreDB, nombreCollection) {
    const client = new MongoClient(url);
    try {
        await client.connect();
        const result = await client
            .db(nombreDB)
            .collection(nombreCollection)
            .insertMany(registrosNuevos);
        console.log(
            `Se insertaron ${result.insertedCount} registros correctamente.`
        );
    } catch (error) {
        console.log(error);
    } finally {
        await client.close();
    }
}

module.exports = {
    insertarRegistros,
};

const { MongoClient } = require('mongodb');
const metodos = require('./datosAleatorios.js');
const { faker } = require('@faker-js/faker');
const { json } = require('express');


// Insertando datos aleatorios de la coleccion usuarios

 const user = [];
for (let i = 1; i < 2001; i++) {
    const usuarios = {
        id_usuario: i,
        nombre: faker.person.firstName(),
        apellido: faker.person.lastName(),
        telefono: faker.phone.number(),
        email: faker.internet.email(),
        contrasena: faker.internet.password(), 
        estado: faker.helpers.arrayElement([true, false], 1, 1),
        fk_rol: Math.floor(Math.random() * 2000)
    };
    user.push(usuarios);
}
metodos.insertarRegistros(user, 'mi_base', 'usuarios');



// Insertando datos aleatorios de la coleccion roles

const rol = [];
for (let i = 1; i < 2001; i++) {
    const roles = {
        id_rol: i,
        rol: faker.helpers.arrayElement(["Administrador","Empleado","Diseñador"],1,1),
        fecha_Creacion: JSON.stringify(faker.date.recent()), 
        estado: faker.helpers.arrayElement([true, false], 1, 1),
    };
    rol.push(roles);
}
metodos.insertarRegistros(rol, 'mi_base', 'roles');



// Insertando datos aleatorios de la coleccion configuracion

const config = [];
for (let i = 1; i < 2001; i++) {
    const configuracion = {
        id_configuracion: i,
        fk_rol: Math.floor(Math.random() * 2000)
    };
    config.push(configuracion);
}
metodos.insertarRegistros(config, 'mi_base', 'configuracion');

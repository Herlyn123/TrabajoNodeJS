const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://herlindavid269:herlin.2004@sena.ahhwqpe.mongodb.net/?retryWrites=true&w=majority";

// Eliminar con deleteOne()

// Eliminamos una propiedad de la coleccion uruarios
async function eliminarPropiedad(nombrePropiedad){
    const client = new  MongoClient(uri);

    try{
        await client.connect();
        const result = await client.db('mi_base').collection('usuarios').deleteOne({nombre:nombrePropiedad});
        console.log(`${result.deletedCount}propiedades fueron eliminadas`);
    }catch(e){
        console.error(e);
    }finally{
        await client.close();
    }
}
eliminarPropiedad("Herlyn David")



// Eliminamos una propiedad de la coleccion roles
async function eliminarPropiedad(nombrePropiedad){
    const client = new  MongoClient(uri);

    try{
        await client.connect();
        const result = await client.db('mi_base').collection('roles').deleteOne({rol:nombrePropiedad});
        console.log(`${result.deletedCount}propiedades fueron eliminadas`);
    }catch(e){
        console.error(e);
    }finally{
        await client.close();
    }
}
eliminarPropiedad("Disenador Experto")



// Eliminamos una propiedad de la coleccion roles
async function eliminarPropiedad(nombrePropiedad){
    const client = new  MongoClient(uri);

    try{
        await client.connect();
        const result = await client.db('mi_base').collection('configuracion').deleteOne({fk_rol:nombrePropiedad});
        console.log(`${result.deletedCount}propiedades fueron eliminadas`);
    }catch(e){
        console.error(e);
    }finally{
        await client.close();
    }
}
eliminarPropiedad(2027)




// Eliminar con deleteMany

// Eliminamos dos propiedades de la coleccion usuarios con deleteMany 
use('mi_base');
db.usuarios.deleteMany({nombre:"Tadej",apellido:"Pogacar"});


// Eliminamos dos propiedades de la coleccion roles con deleteMany 
use('mi_base');
db.roles.deleteMany({rol:"Profesor",estadoo:false});


// Eliminamos dos propiedades de la coleccion configuracion con deleteMany 
use('mi_base');
db.configuracion.deleteMany({id_configuracion:2024, fk_rol:2019});
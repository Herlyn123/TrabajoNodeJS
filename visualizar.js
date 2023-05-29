const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://herlindavid269:herlin.2004@sena.ahhwqpe.mongodb.net/?retryWrites=true&w=majority";

// READ o findOne()
async function econtrarPropiedad(nombrePropiedad){
    const client = new  MongoClient(uri);

    try{
        await client.connect();
        const result = await client.db('mi_base').collection('usuarios').findOne({nombre
            :nombrePropiedad})
        if(result){
            console.log(`Se encontro una propiedad de nombre ${nombrePropiedad}`);
            console.log(result);
        }else{
            console.log(`No se encontro una propiedad de nombre ${nombrePropiedad}`);
            console.log(result); 
        }
    }catch(e){
        console.error(e);
    }finally{
        await client.close();
    }
}
// Visualizamos una propiedad ingresada anteriormente en la coleccion usuarios
econtrarPropiedad("Herlyn")


async function econtrarPropiedad(nombrePropiedad){
    const client = new  MongoClient(uri);

    try{
        await client.connect();
        const result = await client.db('mi_base').collection('roles').findOne({rol
            :nombrePropiedad})
        if(result){
            console.log(`Se encontro una propiedad de nombre ${nombrePropiedad}`);
            console.log(result);
        }else{
            console.log(`No se encontro una propiedad de nombre ${nombrePropiedad}`);
            console.log(result); 
        }
    }catch(e){
        console.error(e);
    }finally{
        await client.close();
    }
}
// Visualizamos una propiedad ingresada anteriormente en la coleccion roles
econtrarPropiedad("Jefe")


async function econtrarPropiedad(nombrePropiedad){
    const client = new  MongoClient(uri);

    try{
        await client.connect();
        const result = await client.db('mi_base').collection('configuracion').findOne({id_configuracion
            :nombrePropiedad})
        if(result){
            console.log(`Se encontro una propiedad de nombre ${nombrePropiedad}`);
            console.log(result);
        }else{
            console.log(`No se encontro una propiedad de nombre ${nombrePropiedad}`);
            console.log(result); 
        }
    }catch(e){
        console.error(e);
    }finally{
        await client.close();
    }
}
// Visualizamos una propiedad ingresada anteriormente en la coleccion configuracion
econtrarPropiedad(1)


// Visualizamos todas las propiedades de la coleccion usuarios
use("mi_base")
db.usuarios.find()

// Visualizamos todas las propiedades de la coleccion roles
use("mi_base")
db.roles.find()

// Visualizamos todas las propiedades de la coleccion confuguracion
use("mi_base")
db.configuracion.find()
const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://herlindavid269:herlin.2004@sena.ahhwqpe.mongodb.net/?retryWrites=true&w=majority";


// Actualizar con updateOne

//Actualizamos una propiedad de la coleccion de usuarios
async function actualizarPropiedad(nombrePropiedad, campoActualizar){
    const client = new  MongoClient(uri);

    try{
        await client.connect();
        const result = await client.db('mi_base').collection('usuarios').updateOne({nombre:nombrePropiedad},{$set:{nombre:campoActualizar}})
        console.log(`${result.matchedCount}propiedades cumplen con el criterio de busqueda`);
        console.log(`${result.modifiedCount}propiedades fueron actualizadas`);
    }catch(e){
        console.error(e);
    }finally{
        await client.close();
    }
}
actualizarPropiedad("Herlyn", "Herlyn David")



//Actualizamos una propiedad de la coleccion de roles
async function actualizarPropiedad(nombrePropiedad, campoActualizar){
    const client = new  MongoClient(uri);

    try{
        await client.connect();
        const result = await client.db('mi_base').collection('roles').updateOne({rol:nombrePropiedad},{$set:{rol:campoActualizar}})
        console.log(`${result.matchedCount}propiedades cumplen con el criterio de busqueda`);
        console.log(`${result.modifiedCount}propiedades fueron actualizadas`);
    }catch(e){
        console.error(e);
    }finally{
        await client.close();
    }
}
actualizarPropiedad("Diseñador", "Diseñador Experto")



// //Actualizamos una propiedad de la coleccion de configuracion
async function actualizarPropiedad(nombrePropiedad, campoActualizar){
    const client = new  MongoClient(uri);

    try{
        await client.connect();
        const result = await client.db('mi_base').collection('configuracion').updateOne({fk_rol:nombrePropiedad},{$set:{fk_rol:campoActualizar}})
        console.log(`${result.matchedCount}propiedades cumplen con el criterio de busqueda`);
        console.log(`${result.modifiedCount}propiedades fueron actualizadas`);
    }catch(e){
        console.error(e);
    }finally{
        await client.close();
    }
}
actualizarPropiedad(2021, 2027)



// Actualizar con updateMany

//Actualizamos dos propiedades de la coleccion usuarios con updateMany
use('mi_base');
db.usuarios.updateMany({nombre:"Andres", apellido:"Marquez"},{$set:{nombre:"Tadej",apellido:"Pogacar"}});


//Actualizamos dos propiedades de la coleccion roles con updateMany
use('mi_base');
db.roles.updateMany({rol:"Gerente Mayor", estado:true},{$set:{rol:"Profesor",estado:false}});


//Actualizamos dos propiedades de la coleccion configuracion con updateMany
use('mi_base');
db.configuracion.updateMany({id_configuracion:2021, fk_rol:2010},{$set:{id_configuracion:2024, fk_rol:2019}});


//Buscamos el id_usuario 7000, si existe nos muestra el registro sino con el upsert nos agrega ese nuevo registro
db.usuarios.updateOne(
    {id_usuario: 7000},
    {
        $set:{
            "nombre": "Tadej",
            "apellido": "Pogacar",
            "telefono": "3243489809",
            "email": "tadej@gmail.com",
            "contrasena": "tadej123",
            "estado": true,
            "fk_rol": 2028
        }
    },
    {upsert:true}
)


//Actualizamos el apellido de todos los usuarios que tienen por nombre Herlyn
db.usuarios.updateMany(
    {
        nombre:"Herlyn"
    },
    {
        $set:{"apellido":"Poso"}
    },
    {
        $upsert:true
    }
)


//Buscamos el id_rol 7000, si existe nos muestra el registro sino con el upsert nos agrega ese nuevo registro
db.roles.updateOne(
    {id_rol: 7000},
    {
        $set:{
            "rol": "Aprendiz",
            "fecha_Creacion": "2023-02-20",
            "estado": true
        }
    },
    {upsert:true}
)


//Actualizamos el estado de true a false de todos los roles que tienen por nombre Aprendiz
db.roles.updateMany(
    {
        rol:"Aprendiz"
    },
    {
        $set:{"estado":false}
    },
    {
        $upsert:true
    }
)


//Buscamos el id_configuracion 7000, si existe nos muestra el registro sino con el upsert nos agrega ese nuevo registro
db.configuracion.updateOne(
    {id_configuracion: 7000},
    {
        $set:{
            "fk_rol": 2029
        }
    },
    {upsert:true}
)


//Actualizamos el fk_rol de de todo id_configuracion que sea 7000 
db.configuracion.updateMany(
    {
        id_configuracion:7000
    },
    {
        $set:{"fk_rol":2030}
    },
    {
        $upsert:true
    }
)

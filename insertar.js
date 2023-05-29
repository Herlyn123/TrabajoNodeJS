const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://herlindavid269:herlin.2004@sena.ahhwqpe.mongodb.net/?retryWrites=true&w=majority";

// Operaciones CRUD

// CREATE insertOne()

// Insertamos un solo dato en la coleccion usuario, esto seria insertOne
async function crearPropiedad(nuevaPropiedad){
    const client = new  MongoClient(uri);

    try{
        await client.connect();

      const result = await client.db('mi_base').collection('usuarios').insertOne(nuevaPropiedad);
        console.log(result);
    
        console.log(`Se creo una nueva propiedad con el siguiente_id: ${result.insertedId}`);
    }catch(e){
        console.error(e);
    }finally{
        await client.close();
    }
}
crearPropiedad({
    id_usuario: 3000,
    nombre: "Herlyn",
    apellido: "David",
    telefono: "3103209843",
    email: "herlindavid234@gmail.com",
    contrasena: "herlindavid",
    estado: true,
    fk_rol: 20001
});


// Insertamos un solo dato en la coleccion roles, esto seria insertOne
async function crearPropiedad(nuevaPropiedad){
  const client = new  MongoClient(uri);

  try{
      await client.connect();

    const result = await client.db('mi_base').collection('roles').insertOne(nuevaPropiedad);
      console.log(result);
  
      console.log(`Se creo una nueva propiedad con el siguiente_id: ${result.insertedId}`);
  }catch(e){
      console.error(e);
  }finally{
      await client.close();
  }
}
crearPropiedad({
    id_rol: 3002,
    rol: "Jefe",
    fecha_Creacion: "2023-07-20",
    estado: false,
});


// Insertamos un solo dato en la coleccion configuracion, esto seria insertOne
async function crearPropiedad(nuevaPropiedad){
  const client = new  MongoClient(uri);

  try{
      await client.connect();

    const result = await client.db('mi_base').collection('configuracion').insertOne(nuevaPropiedad);
      console.log(result);
  
      console.log(`Se creo una nueva propiedad con el siguiente_id: ${result.insertedId}`);
  }catch(e){
      console.error(e);
  }finally{
      await client.close();
  }
}
crearPropiedad({
    id_configuracion: 2020,
    fk_rol: 2021,
});



// Insertamos 3 datos en la coleccion usuarios, esto seria insertMany
use('mi_base');
db.getCollection('usuarios').insertMany([
  { 'id_usuario': 2010, 'nombre': 'Elkin', 'apellido': 'David', 'telefono': '3103823211', 'email': 'elkin@gmail.com', 'contrasena': 'elkin123', 'estado': true, 'fk_rol': 2014},
  { 'id_usuario': 2011, 'nombre': 'Andres', 'apellido': 'Marquez', 'telefono': '3103823212', 'email': 'andres@gmail.com', 'contrasena': 'andres123', 'estado': true, 'fk_rol': 2017},
  { 'id_usuario': 2012, 'nombre': 'Miguel', 'apellido': 'Usuga', 'telefono': '3103823213', 'email': 'miguel@gmail.com', 'contrasena': 'miguel123', 'estado': true, 'fk_rol': 2018}
]);


// Insertamos 3 datos en la coleccion roles, esto seria insertMany
use('mi_base');
db.getCollection('roles').insertMany([
  { 'id_rol': 2010, 'rol': 'Supervisor', 'fecha_Creacion': '2023-07-21', 'estadoo': true},
  { 'id_rol': 2011, 'rol': 'Gerente', 'fecha_Creacion': '2023-07-22', 'estadoo': false},
  { 'id_rol': 2012, 'rol': 'Gerente Mayor', 'fecha_Creacion': '2023-07-23', 'estadoo': true}
]);


// Insertamos 3 datos en la coleccion configuracion, esto seria insertMany
use('mi_base');
db.getCollection('configuracion').insertMany([
  { 'id_configuracion': 2021, 'fk_rol': 2010},
  { 'id_configuracion': 2022, 'fk_rol': 2011},
  { 'id_configuracion': 2023, 'fk_rol': 2012}
]);
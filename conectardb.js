// Aqui hacemos la conexion a la base de datos

const { MongloClient } = require('mongodb')

async function main(){
    const uri = "mongodb+srv://herlindavid269:herlin.2004@sena.ahhwqpe.mongodb.net/?retryWrites=true&w=majority"
    const client = new MongloClient(uri);
    try{
        await client.connect(); // El cliente se conecta
        const listadoBasesDeDatos = await client.db().admin().listDatabases();
        console.log("Los nombres de las bases de datos son: ")
        listadoBasesDeDatos.databases.foreach(db=>console.log(`- ${db.name}`))
    }catch(e){
        console.log(e) // Mostrar error
    }finally{
        await client.close();
    }
}
main().catch(console.error);
//$lookup
// Lo usamos para buscar los usuarios y roles que contengan el mismo estado sea true o false
// Al igual que en el segundo lookup buscamos los id_rol de roles que sea el mismo de id_configuracion
use("mi_base")

db.usuarios.aggregate([
    {
        $lookup: {
          from: "roles",
          localField: "estado",
          foreignField: "estado",
          as: "usuario"
        }
    },{
        $limit: 1
    },{
        $lookup: {
          from: "configuracion",
          localField: "roles.id_rol",
          foreignField: "id:configuracion",
          as: "configuracion"
        }
    }
])



//pipelines 
// Vamos a buscar cuantos nombres de cada uno hay en los registros, pero solo lo hacemos con 7 registros
// Por eso usamos el limit de 7, asi miramos solo 7 registros
db.usuarios.aggregate([
    {
        $group: {
          _id: "$nombre",
          cantidad: { $sum: 1}
          }
        },
        {
            $sort: {cantidad: -1}
        },
        {
            $limit:7
        },
])


// Vamos a buscar cuantos estados de cada uno hay en los registros
// Por eso usamos el limit de 2, aunque en esta ocasion solo hay dos estados, pero se puede dar cuando hayan muchos estados mas
db.roles.aggregate([
    {
        $group: {
          _id: "$estadoo",
          cantidad: { $sum: 1}
          }
        },
        {
            $sort: {cantidad: -1}
        },
        {
            $limit:2
        },
])


// Limit
// Usamos el $limit(2), para asi controlar y limitar los registros que me va arrojar,
// en este limit, nos trae 2 registros de la coleccion usuarios.
db.usuarios.find().limit(2)

// Usamos el $limit(2), para asi controlar y limitar los registros que me va arrojar,
// en este limit, nos trae 2 registros de la coleccion roles.
db.roles.find().limit(2)

// Usamos el $limit(2), para asi controlar y limitar los registros que me va arrojar,
// en este limit, nos trae 2 registros de la coleccion configuracion.
db.configuracion.find().limit(2)



// Sort
// Usamos el sort para asi traer los registros sea de forma ascendente o descendente,
// en este caso los traemos de forma ascendente en la collecion usuarios, y lo traemos por el id_usuario
db.usuarios.find().sort({"id_usuario":1})

// Usamos el sort para asi traer los registros sea de forma ascendente o descendente,
// en este caso los traemos de forma ascendente en la collecion roles, y lo traemos por el id_rol
db.roles.find().sort({"id_rol":1})

// Usamos el sort para asi traer los registros sea de forma ascendente o descendente,
// en este caso los traemos de forma ascendente en la collecion configuracion, y lo traemos por el id_configuracion
db.configuracion.find().sort({"id_configuracion":1})



// Unwind
// Usamos el unwind para convertir un array y devolverlo separado en documentos,
//pero en la coleccion usuarios no tenemos array, entoces no hace nada la operacion
db.usuarios.aggregate([{$unwind : "$nombre"}]).pretty()

// Usamos el unwind para convertir un array y devolverlo separado en documentos, aqui lo hacemos en la coleccion roles
db.roles.aggregate([{$unwind : "$rol"}]).pretty()

// Usamos el unwind para convertir un array y devolverlo separado en documentos,
//pero en la coleccion configuracion no tenemos array, entoces no hace nada la operacion
db.configuracion.aggregate([{$unwind : "$id_configuracion"}]).pretty()



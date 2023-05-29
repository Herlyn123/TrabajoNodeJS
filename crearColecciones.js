// Coleccion de usuarios
use("mi_base");
db.createCollection("usuarios",{
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "Objeto validación de usuario",
      required: ["id_usuario", "nombre", "apellido", "telefono", "email","contrasena", "estado"],
      properties: {
        id_usuario: {
          bsonType: "int",
          description: "Identificador unico del usuario y es obligatorio",
        },
        nombre: {
          bsonType: "string",
          description: "Nombre es un string y es obligatorio",
        },
        apellido: {
            bsonType: "string",
            description: "Apellido es un string y es obligatorio",
          },
        telefono: {
          bsonType: "string",
          description: "telefono es un string y es obligatorio",
        },
        email: {
          bsonType: "string",
          description: "email es un string y es obligatorio",
        },
        contrasena: {
            bsonType: "string",
            description: "contraseña es un string y es obligatorio",
        },
        estado: {
          bsonType: "bool",
          description:
            "El estado es un bool y es obligatorio",
        },
        fk_rol: {
            bsonType: "int",
            description: "Rol es un int y no es reuerido",
        },
      },
    },
  },
});



// Coleccion de roles
db.createCollection("roles",{
    validator: {
      $jsonSchema: {
        bsonType: "object",
        title: "Objeto validación de roles",
        required: ["id_rol", "rol", "fecha_Creacion", "estado"],
        properties: {
          id_rol: {
            bsonType: "int",
            description: "Identificador unico del rol y es obligatorio",
          },
          rol: {
            bsonType: "string",
            description: "rol es un string y es obligatorio",
          },
          fecha_Creacion: {
              bsonType: "date",
              description: "Fecha de creacion es un date y es obligatorio",
            },
          estado: {
            bsonType: "bool",
            description:
              "El estado es un bool y es obligatorio",
          },
        },
      },
    },
  });




// Coleccion de configuracion
db.createCollection("configuracion",{
    validator: {
      $jsonSchema: {
        bsonType: "object",
        title: "Objeto validación de configuracion",
        required: ["id_configuracion", "fk_rol"],
        properties: {
          id_configuracion: {
            bsonType: "int",
            description: "Identificador unico de configuracion y es obligatorio",
          },
          fk_rol: {
            bsonType: "int",
            description:
              "El fk_rol es un int y es obligatorio",
          },
        },
      },
    },
  });
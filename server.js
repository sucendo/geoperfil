/*
Asegúrate de tener Node.js y MongoDB instalados en tu sistema.
Crea una nueva carpeta para tu proyecto y abre una terminal en esa ubicación.
Ejecuta el siguiente comando para inicializar un proyecto de Node.js:
csharp
Copy code
npm init -y
Instala las dependencias necesarias (en este caso, express y mongoose):
Copy code
npm install express mongoose
*/

const express = require('express');
const mongoose = require('mongoose');

// Conexión a la base de datos de MongoDB
mongoose.connect('mongodb://localhost:27017/nombre-de-la-db', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos', error);
  });

// Creación del esquema y modelo para un objeto de ejemplo
const ejemploSchema = new mongoose.Schema({
  nombre: String,
  edad: Number
});

const Ejemplo = mongoose.model('Ejemplo', ejemploSchema);

// Configuración del servidor Express
const app = express();
const port = 3000;

app.use(express.json());

// Ruta para crear un nuevo objeto de ejemplo
app.post('/ejemplos', (req, res) => {
  const nuevoEjemplo = new Ejemplo(req.body);

  nuevoEjemplo.save()
    .then(() => {
      res.send('Nuevo ejemplo creado');
    })
    .catch((error) => {
      res.status(400).send('Error al crear el ejemplo');
    });
});

// Ruta para obtener todos los objetos de ejemplo
app.get('/ejemplos', (req, res) => {
  Ejemplo.find()
    .then((ejemplos) => {
      res.send(ejemplos);
    })
    .catch((error) => {
      res.status(400).send('Error al obtener los ejemplos');
    });
});

// Inicio del servidor
app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});

/* 
Ejecución:

Inicia tu servidor MongoDB localmente ejecutando el comando mongod.
Ejecuta tu proyecto Node.js con el siguiente comando:
Copy code
node server.js
Ahora puedes realizar peticiones POST y GET a http://localhost:3000/ejemplos para crear y obtener objetos de ejemplo en la base de datos.
*/

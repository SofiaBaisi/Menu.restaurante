const { MongoClient } = require('mongodb');


const uri = 'mongodb://localhost:3000'; 


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function conectarDB() {
  try {
    await client.connect();
    console.log('Conexión exitosa a la base de datos');
    return client.db();
  } catch (err) {
    console.error('Error al conectar a la base de datos:', err);
    throw err;
  }
}

module.exports = conectarDB;

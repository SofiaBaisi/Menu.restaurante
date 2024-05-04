const conectarDB = require('./database');

async function agregarPlato(nuevoPlato) {
  try {
    const db = await conectarDB();
    const collection = db.collection('platos');
    const resultado = await collection.insertOne(nuevoPlato);
    console.log('Plato insertado correctamente:', resultado.insertedId);
    return resultado.insertedId;
  } catch (err) {
    console.error('Error al insertar el plato:', err);
    throw err;
  }
}

module.exports = { agregarPlato };

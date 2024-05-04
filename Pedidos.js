import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pedidos = () => {
  return (
    <div>
      <h2>Pedidos</h2>
      {/* Muestra los pedidos realizados por el usuario aquí */}
    </div>
  );
}
const pedidos = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const response = await axios.get('https://tu-backend.com/pedidos');
        setPedidos(response.data); // Asigna los pedidos recibidos del backend al estado
      } catch (error) {
        console.error('Error al obtener los pedidos:', error);
      }
    };
    fetchPedidos();
  }, []);

  return (
    <div>
      <h2>Mis Pedidos</h2>
      <ul>
        {pedidos.map(pedido => (
          <li key={pedido._id}>
            <p>Fecha: {new Date(pedido.fecha).toLocaleDateString()}</p>
            <p>Menú: {pedido.menu.nombre}</p>
            <p>Estado: {pedido.estado}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default Pedidos;


import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      {/* Muestra los menús disponibles aquí */}
    </div>
  );
}

const home = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await axios.get('https://tu-backend.com/menus');
        setMenus(response.data); // Asigna los menús recibidos del backend al estado
      } catch (error) {
        console.error('Error al obtener los menús:', error);
      }
    };
    fetchMenus();
  }, []);

  return (
    <div>
      <h2>Menús Disponibles</h2>
      <ul>
        {menus.map(menu => (
          <li key={menu._id}>
            <h3>{menu.nombre}</h3>
            <p>Precio: {menu.precio}</p>
            <p>Detalle: {menu.detalle}</p>
            <p>Categoría: {menu.categoria}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
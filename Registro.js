import React, { useState } from 'react';
import axios from 'axios';


const Registro = () => {
  return (
    <div>
      <h2>Registro</h2>
      {/* Implementa el formulario de registro aquí */}
    </div>
  );
}



const registro = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://tu-backend.com/registro', {
        nombre,
        email,
        password
      });
      console.log(response.data); // Maneja la respuesta del backend como desees
    } catch (error) {
      console.error('Error al registrar:', error);
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Registro;
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPages from './pages/LoginPages';
import RegistroPages from './pages/RegistroPages';
import HomePages from './pages/HomePages';
import PedidosPages from './pages/PedidosPages';



function App() {
  return (
    <BrowserRouter>
    <Router>
      <Switch>
        <Route path="/login" component={LoginPages} />
        <Route path="/registro" component={RegistroPages} />
        <Route path="/pedidos" component={PedidosPages} />
        <Route path="/home" component={HomePages} />
      </Switch>
      </Router>
    </BrowserRouter>
  );
}

export default App;

const conectarDB = require('./database');

async function iniciarApp() {
  try {
    const db = await conectarDB();
    
  } catch (err) {
    console.error('Error al iniciar la aplicación:', err);
  }
}

iniciarApp();

const { agregarPlato } = require('./dbOperations');

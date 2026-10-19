import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout.js';
import Dashboard from './Pages/Dashboard/Dashboard.js';
import Perfil from './Pages/Perfil/Perfil.js';
import Configuracion from './Pages/Configuracion/Configuracion.js';
import Reportes from './Pages/Reportes/Reportes.js';
import './App.css'

function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route element={<Layout />}>
         <Route path="/"element={<Dashboard />} />
         <Route path="/perfil" element={<Perfil />} />
         <Route path="/configuracion" element={<Configuracion />} />
         <Route path="/reportes" element={<Reportes />} />
       </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
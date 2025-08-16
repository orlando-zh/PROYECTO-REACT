import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './Screens/Home';
import Modulo1 from './Screens/Modulo1';
import API from './Screens/API';
import './style.css';
import './img/fondo.avif';

function App() {
  return (
    <div className="">
      <Router>
        <NavBar />
        <Routes>
          {/* Ruta predeterminada que redirige a /home */}
          <Route path="/" element={<Navigate to="/Home" />} />
          
          <Route path="/home" element={<Home />} />
          <Route path="/modulo1" element={<Modulo1 />} />
          <Route path="/API" element={<API />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

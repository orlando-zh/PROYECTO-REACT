import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './Screens/Home';
import Modulo from './Screens/Modulo';
import API from './Screens/API';
import './style.css';
import './img/fondo.avif';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <Router>
        <NavBar />
        <Routes>
          {/* Ruta predeterminada que redirige a /home */}
          <Route path="/" element={<Navigate to="/Home" />} />
          
          <Route path="/home" element={<Home />} />
          <Route path="/modulo" element={<Modulo />} />
          <Route path="/API" element={<API />} />
        </Routes>
      </Router>
        <Footer />
    </div>
  );
}

export default App;

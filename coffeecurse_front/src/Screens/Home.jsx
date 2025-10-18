import React from 'react';
import { Link } from 'react-router-dom';
import coffeelog from '../img/coffeelog.png';
import cafetera from '../img/cafetera.jpeg';
import fases from '../img/fases.jpg';
import filtro from '../img/filtro.png';
import latte from '../img/latte.avif';
import methodical from '../img/Methodical-Coffee.png';
import taller from '../img/taller-de-cafe-y-barismo.jpg';
import taza from '../img/taza.jpg';
import tetera from '../img/tetera.jpg';
import '../style.css';

const Home = () => {
    return (
        <div>
            {/* Navegacion menu */}
            <nav className="menu">
                <div className="logobox">
                    <h2 className="logotipo">
                        <img src={coffeelog} alt="Logo" />
                    </h2>
                    <span className="btn-menu">
            <i className="fas fa-bars"></i>
          </span>
                </div>
                <div className="list-container">
                    <ul className="lists">
                        <li><Link to="/api">Módulos</Link></li>
                    </ul>
                </div>
            </nav>

            {/* Img Header */}
            <figure className="img-header">
                <div className="welcome">
                    <h4>Exploraremos diversas técnicas de preparación...</h4>
                    <h2>
                        <a href="#">¡Sé el mejor barista!</a>
                    </h2>
                </div>
            </figure>

            <main>
                {/* About Us */}
                <section className="about-us">
                    <div className="info">
                        <h3>Acerca del curso</h3>
                        <p>¡Bienvenidos al curso de Barismo!...</p>
                        <hr />
                    </div>
                    <div className="free-content">
                        <h4>Módulos</h4>
                        <div className="icons">
                            {/* Módulos */}
                            <div>
                                <div className="span-icon"><i className="fas fa-file-pdf"></i></div>
                                <h6>Módulo 1: Fundamentos del Café</h6>
                                <p>Lorem ipsum...</p>
                            </div>
                            <div>
                                <div className="span-icon"><i className="fas fa-images"></i></div>
                                <h6>Módulo 2: Técnicas de Preparación</h6>
                                <p>Lorem ipsum...</p>
                            </div>
                            <div>
                                <div className="span-icon"><i className="fab fa-youtube"></i></div>
                                <h6>Módulo 3: Latte Art y Servicio al Cliente</h6>
                                <p>Lorem ipsum...</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gallery */}
                <section className="gallery-section">
                    <div className="gallery-content">
                        <div className="img-card"><img src={cafetera} alt="" /></div>
                        <div className="img-card"><img src={latte} alt="" /></div>
                        <div className="img-card"><img src={methodical} alt="" /></div>
                        <div className="img-card"><img src={filtro} alt="" /></div>
                        <div className="img-card"><img src={taller} alt="" /></div>
                        <div className="img-card"><img src={tetera} alt="" /></div>
                        <div className="img-card"><img src={taza} alt="" /></div>
                        <div className="img-card"><img src={fases} alt="" /></div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;
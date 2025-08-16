import React from 'react';
import { Link } from 'react-router-dom';
import coffeelog from '../img/coffeelog.png';
import UNIVO from '../img/UNIVO.jpg';
import cafetera from '../img/cafetera.jpeg';
import facebook from '../img/facebook.png';
import fases from '../img/fases.jpg';
import filtro from '../img/filtro.png';
import instagram from '../img/instagram.png';
import latte from '../img/latte.avif';
import methodical from '../img/Methodical-Coffee.png';
import taller from '../img/taller-de-cafe-y-barismo.jpg';
import taza from '../img/taza.jpg';
import tetera from '../img/tetera.jpg';
import whatsapp from '../img/whatsapp.png';


const Home = () => {
    return (
        <>
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="css/style.css" />
          <title>Barista SV</title>
          <link rel="stylesheet" href="css/styles.css" />
          <link rel="stylesheet" href="css/mobile.css" />
          <link rel="stylesheet" href="css/tablet.css" />
          <link
            href="https://fonts.googleapis.com/css?family=Lora:400,700&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        </head>
        <body>
          {/* Navegacion menu */}
          <nav className="menu">
            <div className="logobox">
              <h2 className="logotipo">
                <img src={coffeelog} alt="" />
              </h2>
              <span className="btn-menu">
                <i className="fas fa-bars"></i>
              </span>
            </div>
            <div className="list-container">
              <ul className="lists">
                <li><Link to="/API">Módulos</Link></li>
              </ul>
            </div>
          </nav>
  
          {/* Img Header */}
          <figure className="img-header">
            <div className="welcome">
              <h4>
                Exploraremos diversas técnicas de preparación, incluyendo espresso,
                pour-over, y prensa francesa, y dominaremos el uso de maquinaria
                especializada.
              </h4>
              <h2>
                <a href="">¡Se el mejor barista!</a>
              </h2>
            </div>
          </figure>
  
          <main>
            {/* About Us */}
            <section className="about-us">
              <div className="info">
                <h3>Acerca del curso</h3>
                <p>
                  ¡Bienvenidos al curso de Barismo! , el café es más que una
                  simple bebida; es una experiencia sensorial que despierta los
                  sentidos y conecta a las personas en todo el mundo. En este
                  curso, exploraremos el arte y la ciencia del barismo, una
                  disciplina que va más allá de preparar una taza de café. Nos
                  adentraremos en el fascinante mundo del café, desde el origen de
                  los granos hasta la creación de exquisitas bebidas.
                </p>
                <hr />
              </div>
              <div className="free-content">
                <h4>Módulos</h4>
                <div className="icons">
                  <div>
                    <div className="span-icon">
                      <span>
                        <i className="fas fa-file-pdf"></i>
                      </span>
                    </div>
                    <h6>Módulo 1: Fundamentos del Café</h6>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Debitis nesciunt sed mollitia ea ut itaque.
                    </p>
                  </div>
                  <div>
                    <div className="span-icon">
                      <span>
                        <i className="fas fa-images"></i>
                      </span>
                    </div>
                    <h6>Módulo 2: Técnicas de Preparación</h6>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Debitis nesciunt sed mollitia ea ut itaque.
                    </p>
                  </div>
                  <div>
                    <div className="span-icon">
                      <span>
                        <i className="fab fa-youtube"></i>
                      </span>
                    </div>
                    <h6>Módulo 3: Latte Art y Servicio al Cliente</h6>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Debitis nesciunt sed mollitia ea ut itaque.
                    </p>
                  </div>
                </div>
              </div>
            </section>
  
            {/* Gallery */}
            <section className="gallery-section">
              <div className="animal-icon">
                <i className="fas fa-paw"></i>
              </div>
              <div className="gallery-content">
                <div className="img-card">
                <img src={cafetera} alt="" />
                </div>
                <div className="img-card">
                <img src={latte} alt="" />
                </div>
                <div className="img-card">
                <img src={methodical} alt="" />
                </div>
                <div className="img-card">
                <img src={filtro} alt="" />
                </div>
                <div className="img-card">
                <img src={taller} alt="" />
                </div>
                <div className="img-card">
                <img src={tetera} alt="" />
                </div>
                <div className="img-card">
                <img src={taza} alt="" />
                </div>
                <div className="img-card">
                <img src={fases} alt="" />
                </div>
              </div>
              <p className="centro">
                En el último módulo, exploraremos el arte del latte art y la
                importancia del servicio al cliente en el barismo. Desarrollarás
                tus habilidades para crear hermosos diseños en bebidas a base de
                espresso y leche, impresionando a tus clientes con tu creatividad.
                Además, discutiremos las mejores prácticas para interactuar con
                los clientes, crear un ambiente acogedor en la cafetería y
                garantizar una experiencia excepcional para cada visitante.
                Estos tres módulos te brindarán una formación integral en barismo,
                preparándote para destacarte en la industria del café. ¡Prepárate
                para embarcarte en un viaje lleno de aromas, sabores y técnicas
                apasionantes!
              </p>
            </section>
  
            {/* Modal */}
            <div className="modal">
              <span id="closeModal">
                <i className="fas fa-times"></i>
              </span>
              <img id="imgModal" alt="" />
              <p id="caption"></p>
            </div>
  
            {/* Footer */}
            <footer className="buttons">
              <h3>¡Siguenos en nuestras redes sociales!</h3>
              <div className="redes-sociales">
                <a href="https://www.facebook.com/">
                <img src={facebook} alt="" />
                </a>
                <a href="https://www.instagram.com/">
                <img src={instagram} alt="" />
                </a>
                <a href="https://web.whatsapp.com/">
                <img src={whatsapp} alt="" />
                </a>
                <a href="https://campus.univo.edu.sv/">
                <img src={UNIVO} alt="" />
                </a>
              </div>
              <p>&copy; 2024 UNIVO</p>
            </footer>
          </main>
        </body>
      </>
    )
}

export default Home;
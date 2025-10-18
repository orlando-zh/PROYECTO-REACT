import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getBaristas } from '../api/baristaApi';
import fondo from '../img/fond_API.jpg';
import coffeelog from '../img/coffeelog.png';


function API() {
    const [users, setUsers] = useState([]);

    // Llamamos a la API usando la función importada
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getBaristas();
                setUsers(data);
            } catch (err) {
                console.error("Error fetching baristas:", err);
            }
        };
        fetchData();
    }, []);


  const appStyle = {
    backgroundImage: `url(${fondo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    textAlign: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  };

  const containerStyle = {
    padding: '5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: '1',
  };

  const moduleStyle = {
    backgroundColor: 'rgba(240, 220, 200, 0.9)',
    padding: '1rem',
    margin: '1rem 0',
    width: '80%',
    maxWidth: '800px',
    borderRadius: '8px',
    textAlign: 'left',
  };



  const pdfBasePath = '/pdf/';

  return (
    <div className="App" style={appStyle}>
      <nav className="menu">
        <div className="logobox">
          <h2 className="logotipo">
            <img src={coffeelog} alt="Coffeelog" />
          </h2>
          <span className="btn-menu">
            <i className="fas fa-bars"></i>
          </span>
        </div>
        <div className="list-container">
          <ul className="lists">
            <li><Link to="/Home">INICIO</Link></li>
          </ul>
        </div>
      </nav>

        {/* Contenedor de módulos */}
        <div style={containerStyle}>
            {users.length === 0 && <p>Cargando módulos...</p>}

            {users.map((modulo) => (
                <div key={modulo._id} style={moduleStyle}>
                    {/* Nombre del módulo */}
                    <h1 style={{ color: 'brown' }}>{modulo.nombre}</h1>

                    {/* PDF del módulo */}
                    {modulo.ruta ? (
                        <p>
                            <a
                                href={`${pdfBasePath}${modulo.ruta}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Ver PDF
                            </a>
                        </p>
                    ) : (
                        <p>No hay PDF disponible</p>
                    )}

                    {/* Video */}
                    {modulo.video && (
                        <>
                            <h2 style={{ color: 'brown', marginTop: '1rem' }}>Video:</h2>
                            <p>
                                <a href={modulo.video} target="_blank" rel="noopener noreferrer">
                                    Ver Video
                                </a>
                            </p>
                        </>
                    )}
                </div>
            ))}
        </div>


        {/* Modal */}
      <div className="modal">
        <span id="closeModal">
          <i className="fas fa-times"></i>
        </span>
        <img id="imgModal" alt="" />
        <p id="caption"></p>
      </div>

    </div>
  );
}

export default API;

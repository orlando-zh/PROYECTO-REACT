import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import fondo from '../img/fond_API.jpg';
import coffeelog from '../img/coffeelog.png';

function App() {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
  return axios.get("http://localhost:5000/api/baristas")
    .then((response) => setUsers(response.data));
  }

  useEffect(() => {
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

  const footerStyle = {
    marginTop: 'auto',
    backgroundColor: 'rgba(238, 194, 141, 1.0)',
    padding: '1rem',
    textAlign: 'center',
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

      <div style={containerStyle}>
        {users && users.length > 0 && users.map((user, index) => (
          <div key={user._id} style={moduleStyle}>
            <h1 style={{ color: 'brown' }}>Modulo {index + 1}</h1>
            <ul>
              {Array.isArray(user.modulo1) && user.modulo1.map((pdf, idx) => (
                <p key={idx}>
                  <a href={`${pdfBasePath}${pdf.ruta1}`} target="_blank" rel="noopener noreferrer">{pdf.nombre1}</a>
                </p>
              ))}
            </ul>
            <ul>
              {Array.isArray(user.modulo2) && user.modulo2.map((pdf, idx) => (
                <p key={idx}>
                  <a href={`${pdfBasePath}${pdf.ruta2}`} target="_blank" rel="noopener noreferrer">{pdf.nombre2}</a>
                </p>
              ))}
            </ul>
            <ul>
              {Array.isArray(user.modulo3) && user.modulo3.map((pdf, idx) => (
                <p key={idx}>
                  <a href={`${pdfBasePath}${pdf.ruta3}`} target="_blank" rel="noopener noreferrer">{pdf.nombre3}</a>
                </p>
              ))}
            </ul>
            <h1>ㅤ</h1>
            <h2 style={{ color: 'brown' }}>Link Curso</h2>
            <ul>
              <a href={`https://youtu.be/5IDiKBiLeMk?si=aYJiff4AmXua8uuT${user.youtubeID}`} target="_blank" rel="noopener noreferrer">{user.video1}</a>
              <a href={`https://youtu.be/EpLditg-kSQ?si=rJvLgVw8Hf1d51pZ${user.youtubeID}`} target="_blank" rel="noopener noreferrer">{user.video2}</a>
              <a href={`https://youtu.be/6ZkFDaanXEI?si=tP2YhbRb5F-a2C3t${user.youtubeID}`} target="_blank" rel="noopener noreferrer">{user.video3}</a>
            </ul>
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

export default App;

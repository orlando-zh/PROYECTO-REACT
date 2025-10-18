import React from "react";
import facebook from '../img/facebook.png';
import instagram from '../img/instagram.png';
import whatsapp from '../img/whatsapp.png';
import UNIVO from '../img/UNIVO.jpg';


const footerStyle = {
    marginTop: 'auto',
    backgroundColor: 'rgba(238, 194, 141, 1.0)',
    padding: '1rem',
    textAlign: 'center',
};


const Footer = () => {
    return (
        <footer style={footerStyle} className="buttons">
            <h3>¡Síguenos en nuestras redes sociales!</h3>
            <div className="redes-sociales">
                <a href="https://www.facebook.com/">
                    <img src={facebook} alt="Facebook" />
                </a>
                <a href="https://www.instagram.com/">
                    <img src={instagram} alt="Instagram" />
                </a>
                <a href="https://web.whatsapp.com/">
                    <img src={whatsapp} alt="WhatsApp" />
                </a>
                <a href="https://campus.univo.edu.sv/">
                    <img src={UNIVO} alt="UNIVO" />
                </a>
            </div>
            <p>&copy; 2024 UNIVO</p>
        </footer>
    );
};

export default Footer;
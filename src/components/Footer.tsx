import React from 'react';

import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import './Footer.css';
function Footer() {
    return (
        <>
            <footer>      
                <ul className="contacts">
                    
                    <h1 style={{color:'black'}}>Formas de contato:</h1>
                    <div className="wrapper">
                        <a href="https://wa.me/554192181012">
                            <FaWhatsapp size={40} color='black' />
                        </a>
                        <a href="https://www.instagram.com/reforma_truckevangelista/">
                            <FaInstagram size={40} color='black' />
                        </a>
                        <a style={{ color:'black'}} href="mailto:claudio.evangelista@gmail.com">
                            claudio.evangelista@gmail.com
                        </a>
                    </div>
                    
                <img src="logo.jpeg" alt="Logo" width={150} height={150} />
                </ul>
            </footer>
        </>
    )    
}
export default Footer;

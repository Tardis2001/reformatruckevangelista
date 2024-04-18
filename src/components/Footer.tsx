import React from 'react';

import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import './Footer.css';
import { color } from 'framer-motion';
function Footer() {
    return (
        <>
            <footer>      
                <ul className="contacts">
                    
                    <h1 style={{color:'black'}}>Formas de contato:</h1>
                        <div className='wrapper'>
                        <a className='wrapper' href="https://wa.me/554192181012">
                            <FaWhatsapp size={40} color='black' />
                            <p style={{color:"black"}}>Whatsapp</p>
                        </a>
                        <a className='wrapper' href="https://www.instagram.com/reforma_truckevangelista/">
                            <FaInstagram size={40} color='black' />
                            <p style={{color:"black"}}>Instagram</p>
                        </a>
                        <a className='wrapper' style={{ color:'black'}} href="mailto:claudio.evangelista@gmail.com">
                            claudio.evangelista@gmail.com
                        </a>
                    </div>
                    
                <img src="logo.png" alt="Logo" width={150} height={150} />
                </ul>
            </footer>
        </>
    )    
}
export default Footer;

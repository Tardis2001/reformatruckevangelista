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
                        
                        <a className='wrapper' style={{display:'flex',alignItems:'center'}} href="https://wa.me/554192181012">
                            <FaWhatsapp size={40} color='black' />
                            <p style={{color:"black"}}>Whatsapp</p>
                        </a>
                        <a className='wrapper' style={{display:'flex',alignItems:'center'}} href="https://www.instagram.com/reforma_truckevangelista/">
                            <FaInstagram size={40} color='black' />
                            <p style={{color:"black"}}>Instagram</p>
                        </a>
                        <a className='wrapper-email' style={{ color:'black',display:'flex',alignItems:'center'}} href="mailto:claudio.evangelista@gmail.com">
                            claudio.evangelista@gmail.com
                        </a>
                        <div className='wrapper-local' style={{ color:'black',display:'flex',alignItems:'center'}}>
                            <p style={{color:'black'}}>
                            Rua  das ametista n•378
                            Jardim  Ouro fino
                            </p>
                        </div>
                        <div className='wrapper' >
                            <img src="logo.png" alt="Logo" width={150} height={150} />
                        </div>
                </ul>
            </footer>
        </>
    )    
}
export default Footer;

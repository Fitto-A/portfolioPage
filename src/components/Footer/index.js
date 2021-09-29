import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

import Logo from '../../imgs/Logo_AF_yellow.png';

//LINKS
import { FaBehance, FaLinkedinIn } from "react-icons/fa";
import { FiGithub, FiMail } from "react-icons/fi";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-container">
                <a className='logo' href="/portfolioPage/">
                    <img src={Logo} alt="Logo AF" />
                </a>

                <div className="links">
                    <a className='animation-btn' href="https://www.linkedin.com/in/agustin-fittipaldi/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn />
                    </a>
                    <a className='animation-btn' href="https://www.behance.net/agusfittydg" target="_blank" rel="noopener noreferrer">
                        <FaBehance />
                    </a>
                    <a className='animation-btn' href="https://github.com/Fitto-A" target="_blank" rel="noopener noreferrer">
                        <FiGithub />
                    </a>
                    <a className='animation-btn' href="https://github.com/Fitto-A" target="_blank" rel="noopener noreferrer">
                        <FiMail />
                    </a>
                </div>

                <p className='copy'>Copyright © 2021 <Link to='/portfolioPage/'>Agustin Fittipaldi</Link></p>
            </div>
        </footer>
    )
}

export default Footer

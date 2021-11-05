import React, { useEffect } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

import Logo from '../../imgs/Logo-af-green.png';
import { FaBehance, FaLinkedinIn } from "react-icons/fa";
import { FiGithub, FiMail } from "react-icons/fi";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <footer data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="800"
            data-aos-anchor-placement="top-bottom"
            className='footer'>
            <div className="footer-container">
                <a className='logo' href="/portfolioPage/">
                    <img src={Logo} alt="Logo monograma AF verde" />
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

                <p className='copy'>© 2021 | <Link to='/portfolioPage/'>Agustin Fittipaldi</Link></p>
            </div>
        </footer>
    )
}

export default Footer

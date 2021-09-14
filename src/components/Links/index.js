import React from 'react';
import'./style.scss';

//LINKS
import { FaBehance, FaLinkedinIn } from "react-icons/fa";
import { FiGithub, FiMail } from "react-icons/fi";

const Links = () => {
    return (
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
    )
}

export default Links

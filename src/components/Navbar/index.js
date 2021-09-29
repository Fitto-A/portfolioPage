import React, { useEffect } from 'react';
import './style.scss';
import { Link } from 'react-router-dom'

import Logo from '../../imgs/Logo_AF_yellow.png';

import { AiOutlineLine } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";

import { useGlobalFunctions } from '../context/globalFunctions';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {

    const { openSidebar } = useGlobalFunctions();
    
    useEffect(() => {
        Aos.init();
    }, [])


    return (
        <div data-aos="fade-down"
             data-aos-easing="linear"
             data-aos-duration="600"
             className='navbar'
        >
            <div className="logo-name">
                <Link to='/portfolioPage/'>
                    <img src={Logo} alt="Logo AF" />
                </Link>

                <h3>Agustin Fittipaldi</h3>
            </div>
            <div className="menu">
                <ul>
                    <li onClick={openSidebar}>
                        <HiMenu />
                    </li>
                </ul>
            </div>
            
            <div className="menu-links">
                    <ul>
                        <li>
                            <Link to='/proyectos'>
                                PROYECTOS
                            </Link>
                        </li>
                        <li>
                            <Link to='/conocimientos'>
                                CONOCIMIENTOS
                            </Link>
                        </li>
                        <li>
                            <Link to='/contacto'>
                                CONTACTO
                            </Link>
                        </li>
                    </ul>
                </div>
        </div>
    )
}

export default Navbar

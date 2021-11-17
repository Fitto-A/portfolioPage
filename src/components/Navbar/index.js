import React, { useState, useEffect } from 'react';
import './style.scss';
import { Link } from 'react-router-dom'
import Logo from '../../imgs/Logo-af-orange.png';
import { AiOutlineLine } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import { useGlobalFunctions } from '../context/globalFunctions';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {

    // const { openSidebar } = useGlobalFunctions();

    const [handleMenu, setHandleMenu] = useState(false)

    const changeHandleMenu = () => {
        setHandleMenu(!handleMenu)
    }
    
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
                    <img src={Logo} alt="Logo monograma AF naranja" />
                </Link>

                <h3>Agustin Fittipaldi</h3>
            </div>
            <div className="menu">
                <ul>
                    <li onClick={() => changeHandleMenu()}>
                        <HiMenu />
                    </li>
                </ul>
            </div>
            
            <div className={handleMenu ? "menu-links side-menu" : "menu-links" }>
                    <ul>
                        <li>
                            <Link className='proyectos-link' to='/proyectos'>
                                PROYECTOS
                            </Link>
                        </li>
                        <li>
                            <Link className='conocimientos-link' to='/conocimientos'>
                                CONOCIMIENTOS
                            </Link>
                        </li>
                        <li>
                            <Link className='contacto-link' to='/contacto'>
                                CONTACTO
                            </Link>
                        </li>
                    </ul>
                </div>
        </div>
    )
}

export default Navbar

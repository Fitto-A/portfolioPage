import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

import { FaTimes } from 'react-icons/fa';

import { useGlobalFunctions } from '../context/globalFunctions';

const Sidebar = () => {

    const { isSidebarOpen, closeSidebar } = useGlobalFunctions();

    return (
        <div >
        {/* <div className={isSidebarOpen ? ' sidebar-overlay sidebar-container' : "sidebar-container"}> */}

            {/* <aside className={ isSidebarOpen ? 'show-sidebar sidebar' : 'sidebar' }>
                <button className='close-btn' onClick={closeSidebar} >
                    <FaTimes />
                </button>

                <div className="menu-links">
                    <ul>
                        <li onClick={closeSidebar}>
                            <Link to='/proyectos'>
                                PROYECTOS
                            </Link>
                        </li>
                        <li onClick={closeSidebar}>
                            <Link to='/conocimientos'>
                                CONOCIMIENTOS
                            </Link>
                        </li>
                        <li onClick={closeSidebar}>
                            <Link to='/contacto'>
                                CONTACTO
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside> */}
        </div>
    )
}

export default Sidebar

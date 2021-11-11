import React, { useState, useEffect } from 'react'
import './style.scss'
import { data } from '../../utils/data'
import { Link } from 'react-router-dom';
import Button from '../Button';
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

import { FiGithub } from "react-icons/fi";
import { FaBehance } from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css';


const ProyectosHome = () => {
    const proyecto1 = data.find(proyecto => proyecto.id === 2) //DESARROLLO
    const proyecto2 = data.find(proyecto => proyecto.id === 4) //DISEÑO
    const proyecto3 = data.find(proyecto => proyecto.id === 1) //DESARROLLO
    const proyecto4 = data.find(proyecto => proyecto.id === 3) //DISEÑO

    const [handleBox, setHandleBox] = useState(false)


    useEffect(() => {
        Aos.init({ duration: 3000, easing:'ease-in-out' });
    }, [])

    return (
        <div className="proyectos-home-container">

        {/* PROYECTOS DESARROLLO FRONT-END
        ****************************** */}
        <span className='box-left'>
            <h2 className="title-desarrollo">Desarrollo front-end</h2>
            <p className='arrow-desarrollo arrow-icon'><BsChevronDown /></p>
            {/* <div className="arrow-desarrollo">
                <button onClick={openProjectsBox} className='arrow-desarrollo arrow-icon'><BsChevronDown /></button>
            </div> */}

            <div className="sp-desarrollo">
                <div className="selected-project-container-1" data-aos='fade-right'  data-aos-duration='1000'>
                    <div className="proyect-info">
                        <h3 className='sp-title'>{proyecto1.nameL}</h3>
                        <p className='sp-text'>{proyecto1.descriptionL}</p>
                        <div className="sp-division"></div>
                        {proyecto1.repoL && 
                            <div className="links">
                                <a className='animation-links' href={proyecto1.repoL} target="_blank" rel="noopener noreferrer" data-aos='fade-right' data-aos-duration='1000'>
                                    <FiGithub />
                                </a>
                                {proyecto1.urlL && 
                                    <a className="sp-button" href={proyecto1.urlL} target="_blank" rel="noopener noreferrer" data-aos='fade-right' data-aos-duration='1000'>
                                        <Button>
                                            Ir a la Web
                                        </Button>                                                        
                                    </a>
                                }
                            </div>
                        }
                    </div>
                    <div className="sp-img-container">
                        <img className='sp-img' src={proyecto1.srcL} alt={proyecto1.nameL} />
                    </div>
                </div>

                <div className="selected-project-container-2" data-aos='fade-right'  data-aos-duration='1000'>
                    <div className="proyect-info">
                        <h3 className='sp-title'>{proyecto3.nameR}</h3>
                        <p className='sp-text'>{proyecto3.descriptionR}</p>
                        <div className="sp-division"></div>
                        {proyecto3.repoR && 
                            <div className="links">
                                <a className='animation-links' href={proyecto3.repoR} target="_blank" rel="noopener noreferrer" data-aos='fade-right' data-aos-duration='1000'>
                                    <FiGithub />
                                </a>
                                {proyecto3.urlR && 
                                    <a className="sp-button" href={proyecto3.urlR} target="_blank" rel="noopener noreferrer" data-aos='fade-right' data-aos-duration='1000'>
                                        <Button>
                                            Ir a la Web
                                        </Button>                                                        
                                    </a>
                                }
                            </div>
                        }
                    </div>
                    <div className="sp-img-container">
                        <img className='sp-img' src={proyecto3.srcR} alt={proyecto3.nameR} />
                    </div>
                </div>
            </div>
        </span>


        {/* PROYECTOS DISEÑO GRÁFICO
        ****************************** */}
        <span className='box-right'>
            <p className='arrow-diseño arrow-icon'><BsChevronUp /></p>
            <h2 className="title-diseño">Diseño gráfico</h2>

            <div className="sp-diseño">
                <div className="selected-project-container-3" data-aos='fade-right'  data-aos-duration='1000'>
                    <div className="sp-img-container">
                        <img className='sp-img-diseño' src={proyecto2.srcL} alt={proyecto2.nameL} />
                    </div>
                    <div className="proyect-info">
                        <h3 className='sp-title'>{proyecto2.nameL}</h3>
                        <p className='sp-text'>{proyecto2.moreInfoL}</p>
                        <div className="sp-division"></div>
                        <div className="links">
                            {proyecto2.urlBehanceL && 
                                <a className='animation-links-neg' href={proyecto2.urlBehanceL} target="_blank" rel="noopener noreferrer" data-aos='fade-right' data-aos-duration='1000'>
                                    <FaBehance />
                                </a>
                            }
                            {proyecto2.detailsL && 
                                <Link to={`/proyectos/${proyecto2.id}`}>
                                    <button className='form-btn animacion-btn-neg' data-aos-duration='1000'>
                                        Mas detalles
                                    </button>
                                </Link>
                            }                                    
                        </div>
                    </div>
                </div>

                <div className="selected-project-container-4" data-aos='fade-right'  data-aos-duration='1000'>
                    <div className="sp-img-container">
                        <img className='sp-img-diseño' src={proyecto4.srcR} alt={proyecto4.nameR} />
                    </div>
                    <div className="proyect-info">
                        <h3 className='sp-title'>{proyecto4.nameR}</h3>
                        <p className='sp-text'>{proyecto4.descriptionR}</p>
                        <div className="sp-division"></div>
                        <div className="links">
                                {proyecto4.urlBehanceR && 
                                    <a className='animation-link-neg' href={proyecto4.urlBehanceR} target="_blank" rel="noopener noreferrer" data-aos='fade-right' data-aos-duration='1000'>
                                        <FiGithub />
                                    </a>
                                }
                                {proyecto4.detailsR && 
                                    <Link className='animacion-btn-neg' to={`/proyectos/${proyecto4.id}`}>
                                        <button className='form-btn animacion-btn-neg' data-aos='fade-right' data-aos-duration='1000'>
                                            Mas detalles
                                        </button>
                                    </Link>
                                }                                    
                            </div>
                    </div>
                </div>
            </div>
        </span>

    </div>
    )
}

export default ProyectosHome

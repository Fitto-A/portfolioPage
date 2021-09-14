import React, { useState, useEffect } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import { data } from '../../utils/data'; 

import { useGlobalFunctions } from '../../components/context/globalFunctions';

import Button from '../../components/Button';

//ICONOS
import { FiGithub } from "react-icons/fi";
import { FaBehance } from "react-icons/fa";


import Loading from '../../components/Loading';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {

    const { isSidebarOpen } = useGlobalFunctions();
    const [isLoading, setIsLoading] = useState(false);

    const checkLoading = () => {
        let time = setTimeout(changeLoading, 3000);
    }

    const changeLoading = () => {
        setIsLoading(false)
    }

    useEffect(() => {
        Aos.init({ duration: 3000, easing:'ease-in-out' });
        checkLoading();

    }, [])

    return (
        <div className="projects-page">

            <div className="projects-filter">
            </div>
            
            {isLoading && 
            <Loading />
            }

            {!isLoading &&
                <div>
                    {data.map((project, index)=> {

                        return(
                            <div key={index} className='projects-container'>
                                <div  className="projects ">

                                            {/* PROYECTOS IZQUIERDA */}
                                            <div 
                                                className="project-left"
                                                data-aos='fade-right'
                                                data-aos-duration='1000' 
                                            >
                                                <div className="project-img">
                                                    <img src={project.srcL} alt={project.nameL} />
                                                </div>
                                                <div className="project-info">
                                                    <h2 data-aos='fade-right' data-aos-duration='500'>{project.nameL}</h2>
                                                    <span>{project.categoryL}</span>
                                                    <p>{project.descriptionL}</p>

                                                    <p className='divide'></p>

                                                    {project.urlBehanceL && 
                                                        <a className='animation-links' href={project.urlBehanceL} target="_blank" rel="noopener noreferrer" data-aos='fade-right' data-aos-duration='1500'>
                                                            <FaBehance />
                                                        </a>
                                                    }

                                                    {project.descriptionL && !project.urlL && 
                                                        <Link to={`/proyectos/${project.id}`}  >
                                                            <Button data-aos='fade-right' data-aos-duration='1500'>
                                                                Mas detalles
                                                            </Button>
                                                        </Link>
                                                    }


                                                    {project.urlL &&
                                                    <div className="links">
                                                        <a className='animation-links' href={project.repoL} target="_blank" rel="noopener noreferrer" data-aos='fade-right' data-aos-duration='1500'>
                                                            <FiGithub />
                                                        </a>
                                                        <a href={project.urlL} target="_blank" rel="noopener noreferrer" data-aos='fade-right' data-aos-duration='1500'>
                                                            <Button >
                                                                Ir a la Web
                                                            </Button>                                                        
                                                        </a>
                                                    </div>
                                                    }

                                                </div> 
                                            </div>


                                            {/* PROYECTOS DERECHA */}
                                            <div 
                                                className="project-right"
                                                data-aos='fade-left' 
                                                data-aos-duration='1000' 
                                            >
                                                <div className="project-info">
                                                    <h2 data-aos='fade-left' data-aos-duration='500'>{project.nameR}</h2>
                                                    <span>{project.categoryR}</span>
                                                    <p>{project.descriptionR}</p>

                                                    <p className='divide'></p>

                                                    {project.urlBehanceR && 
                                                        <a className='animation-links' href={project.urlBehanceR} target="_blank" rel="noopener noreferrer" data-aos='fade-right' data-aos-duration='1500'>
                                                            <FaBehance />
                                                        </a>
                                                    }

                                                    {project.descriptionR && !project.urlR && 
                                                        <Link to={`/proyectos/${project.id}`}  >
                                                            <Button data-aos='fade-right' data-aos-duration='1500'>
                                                                Mas detalles
                                                            </Button>
                                                        </Link>
                                                    }

                                                    {project.urlR && 
                                                    <div className="links">
                                                        <a href={project.urlR} target="_blank" rel="noopener noreferrer">
                                                            <Button data-aos='fade-left' data-aos-duration='1500'>
                                                                Ir a la Web
                                                            </Button>                                                           
                                                        </a>
                                                        <a className='animation-links' href={project.repoR} target="_blank" rel="noopener noreferrer" data-aos='fade-left' data-aos-duration='1500'>
                                                            <FiGithub />
                                                        </a>
                                                    </div>
                                                    }

                                                </div>

                                                <div className="project-img">
                                                    <img src={project.srcR} alt={project.nameR} />
                                                </div>
                                            </div>
                                </div>
                                <div className="divisor">
                                </div>
                            </div>
                        )
                    })}
            
                </div>
            }
            
        </div>
    )

}
export default Projects




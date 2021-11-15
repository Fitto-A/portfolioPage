import React, { useState, useEffect } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { FiGithub } from "react-icons/fi";
import { data } from '../../utils/data';

import { RiArrowLeftSLine} from "react-icons/ri";

const ProjectDetail = () => {

    const { projectId } = useParams();
    const [isIdPar, setIsIdPar] = useState(true);

    const selectedProject = data.find((item) => item.id == projectId )

    const {nameL, srcLPortada, srcL, descriptionL2, descriptionL3, descriptionL4, categoryDescriptionL, repoL, srcL2, srcL3, srcL4, srcL5, srcL6, srcL7, srcL8, srcL9, srcL10, srcL11 } = selectedProject
    const { nameR, srcR, descriptionR2, descriptionR3, categoryDescriptionR, repoR, srcR2, srcR3, srcR4, srcR5 } = selectedProject


    const checkParImpar = (projectId) => {
        if(projectId == 0 || projectId % 2 == 0)
            return setIsIdPar(true);
        else
            return setIsIdPar(false);
        
    }

    useEffect(() => {
        checkParImpar(projectId)
    }, [])


    return (
        <div className='project-detail'>

            {/* PROYECTO LADO IZQUIERDO  */}
            {projectId && isIdPar &&
                <div className="project-detail-container">
                    <div className="detail-info">
                        <div className="detail-info-content">
                            <h4>{categoryDescriptionL}</h4>
                            <h2>{ nameL }</h2>
                        </div>
                        <p className='description'>{descriptionL2}</p>
                    </div>
                    <div className="detail-img">
                        <img src={srcLPortada} alt={nameL} />
                        {descriptionL3 && 
                            <p className='description2'>{descriptionL3}</p>
                        }
                        {srcL &&
                           <img src={srcL2} alt={nameL} />
                        }
                        {descriptionL4 && 
                            <p className='description2'>{descriptionL4}</p>
                        }
                        {srcL3 &&
                           <img src={srcL3} alt={nameL} />
                        }
                        {srcL4 &&
                           <img src={srcL4} alt={nameL} />
                        }
                        {srcL5 &&
                           <img src={srcL5} alt={nameL} />
                        }
                        {srcL6 &&
                           <img src={srcL6} alt={nameL} />
                        }
                        {srcL7 &&
                           <img src={srcL7} alt={nameL} />
                        }
                        {srcL8 &&
                           <img src={srcL8} alt={nameL} />
                        }
                        {srcL9 &&
                           <img src={srcL9} alt={nameL} />
                        }                        
                        {srcL10 &&
                           <img src={srcL10} alt={nameL} />
                        }
                        {srcL11 &&
                           <img src={srcL11} alt={nameL} />
                        }
                    </div>

                    {repoL && 
                        <div className="links-proyectos">
                            <p>Ver el código de desarrollo.</p>
                            <a className='animation-links' href={repoL} target="_blank" rel="noopener noreferrer" data-aos='fade-right' data-aos-duration='1000'>
                                <FiGithub />
                            </a>
                        </div>
                    }
                </div>

            }

            {/* PROYECTO LADO DERECHO  */}
            {projectId && !isIdPar &&
                <div className="project-detail-container">
                    <div className="detail-info">
                        <div className="detail-info-content">
                            <h4>{categoryDescriptionR}</h4>
                            <h2>{ nameR }</h2>

                            {repoR &&
                                <div className="links">
                                    <a className='animation-links' href={repoR} target="_blank" rel="noopener noreferrer" data-aos='fade-right' data-aos-duration='1000'>
                                        <FiGithub />
                                    </a>
                                </div>
                            }
                        </div>
                        <p className='description'>{descriptionR2}</p>
                    </div>
                    <div className="detail-img">
                        <img src={srcR} alt={nameR} />
                        <p className='description2'>{descriptionR3}</p>
                        {srcR2 &&
                           <img src={srcR2} alt={nameR} />
                        }
                        {srcR3 &&
                           <img src={srcR3} alt={nameR} />
                        }
                        {srcR4 &&
                           <img src={srcR4} alt={nameR} />
                        }
                        {srcR5 &&
                           <img src={srcR5} alt={nameR} />
                        }
                    </div>
                </div>
            }

            <Link to='/proyectos/' className='back-link'>
                <RiArrowLeftSLine className='arrow'/>
                <span className='back'>Volver</span>
            </Link>
        </div>
    )
}

export default ProjectDetail

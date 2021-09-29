import React, { useState, useEffect } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { FiGithub } from "react-icons/fi";
import { data } from '../../utils/data';

import { HiArrowNarrowLeft } from "react-icons/hi";


const ProjectDetail = () => {

    const { projectId } = useParams();
    const [isIdPar, setIsIdPar] = useState(true);

    const selectedProject = data.find((item) => item.id == projectId )

    const {nameL, srcL, descriptionL2, repoL, srcL2, srcL3, srcL4, srcL5 } = selectedProject
    const { nameR, srcR, descriptionR2, repoR, srcR2, srcR3, srcR4, srcR5 } = selectedProject


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
            <Link to='/proyectos/' className='back-link'>
                <HiArrowNarrowLeft className='arrow'/>
                <span className='back'>Volver</span>
            </Link>

            {/* PROYECTO LADO IZQUIERDO  */}
            {projectId && isIdPar &&
                <div className="project-detail-container">
                    <div className="detail-info">
                        <div className="detail-info-content">
                            <h2>{ nameL }</h2>
                            <div className="links">
                                <a className='animation-links' href={repoL} target="_blank" rel="noopener noreferrer" data-aos='fade-right' data-aos-duration='1000'>
                                    <FiGithub />
                                </a>
                            </div>
                        </div>
                        <p className='description'>{descriptionL2}</p>
                    </div>
                    <p className='divide'></p>
                    <div className="detail-img">
                        <img src={srcL} alt={nameL} />
                        {srcL2 &&
                           <img src={srcL2} alt={nameL} />
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
                    </div>
                </div>
            }

            {/* PROYECTO LADO DERECHO  */}
            {projectId && !isIdPar &&
                <div className="project-detail-container">
                    <div className="detail-info">
                        <div className="detail-info-content">
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
                    <p className='divide'></p>
                    <div className="detail-img">
                        <img src={srcR} alt={nameR} />
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

        </div>
    )
}

export default ProjectDetail

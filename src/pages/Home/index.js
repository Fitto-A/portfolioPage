import React, { useEffect } from 'react';
import styled from 'styled-components';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import LogoBg from '../../imgs/Logo-bg3.png';
import LogoBgSvg from '../../imgs/Logo-bg.svg';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { RiArrowRightSLine } from 'react-icons/ri';
import ProyectosHome from '../../components/ProyectosHome';

const Home = () => {
    const scrollDown = () => {
        let element = document.getElementById('article-id');
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className="home">
            {/* <div className="arrowScrollToTop" onClick={handleScrollTop}><BsChevronUp /></div> */}
            <div className="home-display">
                <img className="bg-image-home" src={LogoBg} alt="Logo monograma af" />
                <div className="home-container">
                    <div
                        data-aos="fade-up-left"
                        data-aos-duration="500"
                        data-aos-easing="ease-in-out"
                        className="home-tittle"
                    >
                        <h2>Portfolio</h2>
                    </div>
                    <div className="home-subtittle">
                        <h4
                            data-aos="fade-up-left"
                            data-aos-duration="700"
                            data-aos-easing="ease-in-out"
                            className="diseño"
                        >
                            Desarrollo Front-end
                        </h4>
                        {/* <h4
              data-aos="fade-up-left"
              data-aos-duration="900"
              data-aos-easing="ease-in-out"
              className="desarrollo"
            >
              Desarrollo Front-end
            </h4> */}
                    </div>
                </div>
            </div>

            <div data-aos="fade-up" data-aos-duration="1400" data-aos-easing="ease-in-out" className="home-arrow">
                <button onClick={scrollDown} className="arrow-icon">
                    <BsChevronDown />
                </button>
            </div>

            <div className="article-container" id="article-id">
                <article className="article-presentacion">
                    <h4 className="sobre-mi" data-aos="fade-left" data-aos-duration="900" data-aos-easing="ease-in-out">
                        Sobre mí
                    </h4>
                    <p
                        className="sobre-mi-text"
                        data-aos="fade-left"
                        data-aos-duration="1100"
                        data-aos-easing="ease-in-out"
                    >
                        Hola soy Agustin, diseñador gráfico y desarrollador front-end. Soy un apasionado del diseño
                        gráfico y la tecnología. Busco encontrar una solución creativa para cada nuevo proyecto. Y con
                        esto, poder ayudar a mis clientes y prosperar juntos.
                    </p>
                    <Link to="/contacto" className="contacto-link">
                        <h4 data-aos="fade-left" data-aos-duration="1300" data-aos-easing="ease-in-out">
                            Contacto{' '}
                            <span>
                                <RiArrowRightSLine />
                            </span>
                        </h4>
                    </Link>
                </article>
            </div>

            <div className="proyectos-home">
                <ProyectosHome />
            </div>

            <div className="last-article-container">
                <article className="last-article">
                    <Link to="/proyectos">
                        <Button data-aos="zoom-in-right" data-aos-duration="1000" data-aos-easing="ease-in-out">
                            Ver todos los proyectos
                        </Button>
                    </Link>

                    <Link to="/contacto">
                        <Button data-aos="zoom-in-left" data-aos-duration="1000" data-aos-easing="ease-in-out">
                            Contactame
                        </Button>
                    </Link>
                </article>
            </div>
        </div>
    );
};

export default Home;

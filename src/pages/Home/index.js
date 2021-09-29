import React, { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const Home = () => {

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div className="home">
            <div className="home-container">
                <div 
                    className="home-tittle"
                    data-aos="zoom-in"
                    data-aos-duration="500"
                >
                    {/* <h2>
                        PORT
                        FOLIO
                    </h2> */}
                    <h2>
                        Port
                        folio
                    </h2>
                </div>
                <div className="home-subtittle">
                    <h4 
                        data-aos="fade-down-right"
                        data-aos-duration='700'
                        className='desarrollo'>
                        Desarrollo Front-end
                    </h4>
                    <h4 
                        data-aos="fade-up-left"
                        data-aos-duration='1000'
                        className='diseño'>
                            Diseño Gráfico
                    </h4>
                    <Link to='/proyectos'>
                        <Button 
                            data-aos="fade-up-right"
                            data-aos-duration='1200'
                        >
                            PROYECTOS
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="article">
                <article>
                    <p>Hola soy Agustin, tengo 2 años de experiencia desarrollando webs con JS y React. También soy diseñador gráfico y hace más de 4 años que trabajo especialmente en la identidad de marca de mis clientes. Abajo están mis redes si queres  contactarme, y sino mandame un mensaje por mail en la sección de <Link to='/contacto'>contacto</Link>.</p>
                </article>
            </div>
        </div>
    )
}

export default Home
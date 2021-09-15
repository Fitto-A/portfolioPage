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
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    className="home-tittle">
                    <h2>
                        PORT
                        FOLIO
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
        </div>
    )
}

export default Home
import React from 'react';
import './style.scss';

import WebDev from '../../imgs/conocimientos/Desarroll-web.png';
import Design from '../../imgs/conocimientos/Diseño-gráfico.png';

// import imgBack from '../../imgs/Tools-bg.png';

const Tools = () => {
    return (
        <div className="tools">
            {/* <div className="bg">
                <img src={ imgBack } alt="bg" />
            </div> */}
            <article className='tools-container'>
                <div className="desarrollo-web">
                    <h2>Desarrollo Web</h2>
                    <div className="desarrollo-logos">
                        <img src={WebDev} alt="Logos herramientas de desarrollo" />
                    </div>
                    <div className="tools-info">
                        <p>Html5 <span className='lines'>||</span> CSS3 <span className='lines'>||</span> JavaScript</p>
                        <p>React <span className='lines'>||</span> Sass <span className='lines'>||</span> Bootstrap</p>
                        <p>Firebase</p>
                    </div>
                </div>

                <div className="design">
                    <h2>Diseño Gráfico</h2>
                    <img src={Design} alt="Logos herramientas de diseño" />
                    <div className="tools-info">
                        <p>Illustrator <span className='lines'>||</span> Photoshop <span className='lines'>||</span> Adobe xD</p>
                        <p>After Effects</p>
                    </div>
                </div>
            </article>            
        </div>
    )
}

export default Tools

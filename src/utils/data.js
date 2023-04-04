import HomeCart from '../imgs/shopping-cart/home.JPG';
import MemoryCardGame from '../imgs/memory-card/home.JPG';
import Karting from '../imgs/karting/karting.jpg';
import CV from '../imgs/cv-creator/form.JPG';
import Calaca from '../imgs/calaca/calaca-logo.jpg';

import Lara from '../imgs/lara-del-mar/lara-del-mar.jpg';
import LaraLogo from '../imgs/lara-del-mar/lara-del-mar-logo.jpg';
import LaraPlacas from '../imgs/lara-del-mar/placas.jpg';
import LaraVersiones from '../imgs/lara-del-mar/versiones-de-marca.jpg';
import LaraTrama from '../imgs/lara-del-mar/trama.jpg';

import Api from '../imgs/e-commerce-api/tienda-api.JPG';
import ApiLogo from '../imgs/e-commerce-api/Api-logo.jpg';
import ApiPortada from '../imgs/e-commerce-api/api-portada-fondo-blanco.jpg';
import ApiWeb from '../imgs/e-commerce-api/api-web.png';

import Picos from '../imgs/picos/Picos.jpg';
import TheUtilsPage from '../imgs/the-utils-page/Utils-home.JPG';

import GedefLogin from '../imgs/gedef/gedef-loginPage.png';

import TwitterHome from '../imgs/twitter-clone/twitter-clone-home.png';

//LOGOFOLIO
import logofolioPortada from '../imgs/logofolio/logofolio-portada.jpg';
import logofolio01 from '../imgs/logofolio/logofolio-01.jpg';
import logofolio02 from '../imgs/logofolio/logofolio-02.jpg';
import logofolio03 from '../imgs/logofolio/logofolio-03.jpg';
import logofolio04 from '../imgs/logofolio/logofolio-04.jpg';
import logofolio05 from '../imgs/logofolio/logofolio-05.jpg';
import logofolio06 from '../imgs/logofolio/logofolio-06.jpg';
import logofolio07 from '../imgs/logofolio/logofolio-07.jpg';
import logofolio08 from '../imgs/logofolio/logofolio-08.jpg';
import logofolio09 from '../imgs/logofolio/logofolio-09.jpg';
import logofolio10 from '../imgs/logofolio/logofolio-10.jpg';

export const newData = [
    {
        nameL: 'GEDEF',
        subtitle: 'Sistema de Gestión de Flota',
        srcL: GedefLogin,
        srcL2: ApiWeb,
        srcL4: ApiLogo,
        srcLPortada: ApiPortada,
        categoryL: 'Desarrollo web y Diseño UX/UI',
        smallDescription:
            'Aplicación de gestión de flota y producción para buques pesqueros. En la misma, se asignan los tripulantes designados al viaje y se los asocia a su rol correspondiente dentro del barco. Además, se registra la producción del barco, por día de cada viaje. ',
        descriptionL:
            'Aplicación para la gestión de flota y producción, de viajes de barcos pesqueros. En la misma, se asignan los tripulantes designados al viaje y se los asocia a su rol correspondiente dentro del barco. Se cargan los días trabajados por cada tripulante. Además, se registra la producción del barco, por día de cada viaje. En otra sección, permite visualizar está información, en forma de distintos reportes, para poder analizar los datos.',
        descriptionL2: '',
        descriptionL3: '',
        descriptionL4: '',
        categoryDescriptionL: 'Desarrollo web. Diseño de marca.',
        id: 0,
        detailsL: true,
        skills: ['React', 'ASP.NET Web API', 'SQL', 'Entity Framework'],
    },
    {
        nameR: 'Educa Previsional',
        subtitle: 'Plataforma de cursos online',
        srcR: MemoryCardGame,
        categoryR: 'Desarrollo web, Diseño UX/UI y Diseño de marca',
        descriptionR:
            'Es un proyecto en conjunto con (link de portfolio de Alan), donde desarrollamos una web de cursos online para un estudio de abogados. El usuario puede crearse una cuenta en la página, comprar cursos a través de mercado pago y ver los cursos desde la web.',
        descriptionR2:
            'Es un proyecto en conjunto con (link de portfolio de Alan), donde desarrollamos una web de cursos online para un estudio de abogados. El usuario puede crearse una cuenta en la página, comprar cursos a través de mercado pago y ver los cursos desde la web.En cuanto a tecnologías, el desarrollo está hecho con MERN. Utilizamos RTK Query de React, Styled-components y Typescrip. Además del desarrollo, realicé un logo y diseño de marca para el cliente. Alan se encargó del backend con Mongo y Node Js. Y ambos realizamos el front de la web.La página cuenta con una administración, donde nuestro cliente puede crear cursos, módulos y tener interacción con el usuario final. En los cursos se pueden ver videos enlazados desde Vimeo, descargar contenido y ver el progreso del curso. Además, se puede chatear con el profesor, y una vez finalizado el curso se recibe un certificado y se puede puntuar el mismo.',
        urlR: 'https://fitto-a.github.io/react-memory-game/',
        id: 1,
    },
    {
        nameL: 'Twitter Clone',
        srcL: TwitterHome,
        srcL2: ApiWeb,
        srcL4: ApiLogo,
        srcLPortada: ApiPortada,
        categoryL: 'Desarrollo web',
        descriptionL:
            'Aplicación para la gestión de flota y producción, de viajes de barcos pesqueros. En la misma, se asignan los tripulantes designados al viaje y se los asocia a su rol correspondiente dentro del barco. Se cargan los días trabajados por cada tripulante. Además, se registra la producción del barco, por día de cada viaje. En otra sección, permite visualizar está información, en forma de distintos reportes, para poder analizar los datos.',
        descriptionL2: '',
        descriptionL3: '',
        descriptionL4: '',
        categoryDescriptionL: 'Desarrollo web. Diseño de marca.',
        id: 2,
        detailsL: true,
        urlR: 'https://twitter-clone-psi-flax.vercel.app/',
        repoL: 'https://github.com/alanmathiasen/tweeter-clone',
    },
    {
        nameR: 'Carro de compras',
        srcR: HomeCart,
        categoryR: 'Desarrollo web y Diseño UX/UI',
        descriptionR:
            'Web E-commerce realizada con React, React-router-dom y Sass. Además de diseño de logotipo e identidad de marca para Marina.  ',
        moreInfoR: "The Odin Project's curriculum",
        urlR: 'https://fitto-a.github.io/marina-store/',
        repoR: 'https://github.com/Fitto-A/marina-store',
        id: 3,
    },
    {
        nameL: 'The Utils Page',
        srcL: TheUtilsPage,
        categoryL: 'Desarrollo web',
        descriptionL: 'Web con distintas funcionalidades como un buscador de imágenes o un generador de colores.',
        urlL: 'https://fitto-a.github.io/the-utils-page',
        repoL: 'https://github.com/Fitto-A/the-utils-page',
        id: 4,
    },
];

export const data = [
    {
        nameL: 'E-commerce API',
        srcL: Api,
        srcL2: ApiWeb,
        srcL4: ApiLogo,
        srcLPortada: ApiPortada,
        categoryL: 'Desarrollo web y Diseño Gráfico',
        descriptionL:
            'E-commerce realizada con React, Firebase, React-router-dom y Sass. Construcción de Logo e identidad de marca.',
        descriptionL2:
            'API es un emprendimiento de materiales didácticos para niños y niñas. En este proyecto, en base a un naming ya elegido por el cliente, realicé el logo de la marca, y la página web, además de unas tarjetas de presentación y calcomanías para el packaging de la marca.',
        descriptionL3:
            'En estos momentos el sitio web está en construcción. El mismo, está siendo creado con React, Redux, Sass y Firebase como backend para almacenar datos de la tienda y autenticación de usuarios. ',
        descriptionL4:
            'Versiones de marca con paleta de colores. Además de tarjetas de presentación y calcomanías para usar en el packaging de los productos.',
        categoryDescriptionL: 'Desarrollo web. Diseño de marca.',
        repoL: 'https://github.com/Fitto-A/e-commerce-react',
        id: 0,
        detailsL: true,
    },
    {
        nameR: 'Juego de memoria',
        srcR: MemoryCardGame,
        categoryR: 'Desarrollo web',
        descriptionR:
            'Juego de memoria, práctica del curriculum The Odin Project. Web realizada con React y CSS. Intentá clickear los 12 personajes, sin repetir ninguna carta!',
        moreInfoR: "The Odin Project's curriculum",
        urlR: 'https://fitto-a.github.io/react-memory-game/',
        repoR: 'https://github.com/Fitto-A/react-memory-game',
        id: 1,
    },
    {
        nameL: 'Carro de compras',
        srcL: HomeCart,
        categoryL: 'Desarrollo web',
        descriptionL:
            'Web E-commerce realizada con React, React-router-dom y Sass. Además de diseño de logotipo e identidad de marca para Marina.  ',
        moreInfoL: "The Odin Project's curriculum",
        urlL: 'https://fitto-a.github.io/marina-store/',
        repoL: 'https://github.com/Fitto-A/marina-store',
        id: 2,
    },
    {
        nameR: 'Diseño de marca Lara del Mar',
        srcR: Lara,
        srcR2: LaraLogo,
        srcR3: LaraPlacas,
        srcR4: LaraVersiones,
        srcR5: LaraTrama,
        categoryR: 'Diseño Gráfico',
        descriptionR:
            'Lara del Mar es una empresa de perfumes de imitación. En este proyecto desarrollé el logo y diferentes placas para las redes sociales.',
        descriptionR2:
            'Lara del Mar es una empresa de perfumes de imitación. En este proyecto desarrollé el logo y diferentes placas para las redes sociales.',
        descriptionR3:
            'La marca busca representar un concepto de frescura, y a su vez, un logo que sea simple, geométrico y estético como los frascos de perfumes. Para la construcción del símbolo se usó la letra L de forma espejada para representar ese concepto de imitación.',
        categoryDescriptionR: 'Diseño de marca. Diseño de packaging.',
        id: 3,
        detailsR: true,
    },
    {
        nameL: 'Diseño de marca CochKart',
        srcL: Karting,
        categoryL: 'Diseño Gráfico',
        descriptionL: 'Diseño de Logo, tarjetas, adhesivos y placas publicitarias.',
        moreInfoL:
            'CochKart es un emprendimiento de servicios de cochera y servis mecánico para kartings de competición. Con un nombre ya establecido, se me solicitó realizar un logo, tarjetas de contacto, adhesivos y diferentes placas publicitarias para mostrar la marca en las redes sociales.',
        urlBehanceL: 'https://www.behance.net/gallery/128386405/Coch-Kart-Brand',
        id: 4,
    },
    {
        nameR: 'The Utils Page',
        srcR: TheUtilsPage,
        categoryR: 'Desarrollo web',
        descriptionR: 'Web con distintas funcionalidades como un buscador de imágenes o un generador de colores.',
        urlR: 'https://fitto-a.github.io/the-utils-page',
        repoR: 'https://github.com/Fitto-A/the-utils-page',
        id: 5,
    },
    {
        nameL: 'Diseño de marca Calaca Barbería',
        srcL: Calaca,
        categoryL: 'Diseño Gráfico',
        descriptionL: 'Diseño de Logo, tarjetas y aplicaciones.',
        urlBehanceL: 'https://www.behance.net/gallery/127213165/Calaca-barberia',
        id: 6,
    },
    {
        nameR: 'Diseño de íconos y tarjetas',
        srcR: Picos,
        categoryR: 'Diseño Gráfico',
        descriptionR: 'Diseño de íconos y tarjetas para Picos.',
        urlBehanceR: 'https://www.behance.net/gallery/100192623/Iconos-picos',
        id: 7,
    },
    {
        nameL: 'Logofolio',
        srcLPortada: logofolioPortada,
        srcL: logofolioPortada,
        srcL2: logofolio01,
        srcL3: logofolio02,
        srcL4: logofolio03,
        srcL5: logofolio04,
        srcL6: logofolio05,
        srcL7: logofolio06,
        srcL8: logofolio07,
        srcL9: logofolio08,
        srcL10: logofolio09,
        srcL11: logofolio10,
        categoryL: 'Diseño Gráfico',
        descriptionL: 'Logofolio de marcas e iconos realizados entre 2019 y 2021.',
        descriptionL2: 'Logofolio de marcas e iconos realizados entre 2019 y 2021.',
        moreInfoL: 'Logofolio de marcas e iconos realizados entre 2019 y 2021.',
        categoryDescriptionL: 'Diseño de marca.',
        detailsL: true,
        id: 8,
    },
    {
        nameR: 'Curriculum creator App',
        srcR: CV,
        categoryR: 'Desarrollo web',
        descriptionR: 'App para generar un CV, hecha con React y CSS',
        moreInfoR: "The Odin Project's curriculum",
        urlR: 'https://fitto-a.github.io/cv-project/',
        repoR: 'https://github.com/Fitto-A/cv-project',
        id: 9,
    },
];

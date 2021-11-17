import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.scss';

import { BsChevronUp } from "react-icons/bs";

//COMPONENTS
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

//PAGES
import Home from './pages/Home';
import Projects from './pages/Projects';
import Tools from './pages/Tools';
import Contact from './pages/Contact'; 
import ProjectDetail from './pages/ProjectDetail';

const App = () =>  {

  const handleScrollTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
  }

  const handleArrowScroll = () => {
    window.addEventListener('scroll', function() {
      let scroll = document.querySelector('.arrowScrollToTop')
      scroll.classList.toggle('arrow-active', window.scrollY > 500)
    })
  }

  useEffect(() => {
    handleArrowScroll()
  }, [])

  return (
    <Router basename="/">
      <Navbar />
      <Sidebar />
      
      <ScrollToTop />
      <div className="arrowScrollToTop" onClick={handleScrollTop}><BsChevronUp /></div>
      <Switch>
        <Route exact path= '/portfolioPage/'> 
          <Home />
        </Route>

        <Route exact path= '/proyectos'> 
          <Projects />
        </Route>

        <Route  path= '/proyectos/:projectId'>
          <ProjectDetail />
        </Route>

        <Route  path= '/conocimientos'> 
          <Tools />
        </Route>

        <Route  path= '/contacto'> 
          <Contact />
        </Route>
      </Switch>

      <Footer />
    </Router>

  );
}

export default App;

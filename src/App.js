import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.scss';

//COMPONENTS
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer'

//PAGES
import Home from './pages/Home';
import Projects from './pages/Projects';
import Tools from './pages/Tools';
import Contact from './pages/Contact'; 
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <Router basename='/'>
      <Navbar />
      <Sidebar />

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

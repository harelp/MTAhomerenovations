import React, { useRef } from 'react';
import Project from './components/project/Project';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Service from './components/service/Service';
import './sass/main.scss';
import Contact from './components/contact/Contact';

function App() {
  const header = useRef();
  const services = useRef();
  const projects = useRef();
  const contact = useRef();

  return (
    <div className="app">
      <Navbar scrollTo={[header, services, projects, contact]} />
      <Hero scrollTo={contact} />
      <Service scrollTo={services} />
      <Project scrollTo={projects} />
      <Contact scrollTo={contact} />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import Project from './components/project/Project';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Service from './components/service/Service';
import './sass/main.scss';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Service />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

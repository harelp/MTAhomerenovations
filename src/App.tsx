import React from 'react';
// import Scroll from './components/scroll/Scroll';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Service from './components/service/Service';
import './sass/main.scss';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      {/* <Scroll /> */}
      <Service />
      <Footer />
    </div>
  );
}

export default App;

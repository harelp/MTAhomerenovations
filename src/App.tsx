import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Service from './components/service/Service';
import './sass/main.scss';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="services" element={<Service />} />
      </Routes>
    </div>
  );
}

export default App;

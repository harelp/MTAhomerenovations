import React, { useRef, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import UserContext from './components/context/UserContext';
import Project from './components/project/Project';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Service from './components/service/Service';
import Contact from './components/contact/Contact';
import Display from './components/display/Display';
import './sass/main.scss';
import Login from './components/user/Login';
import SignIn from './components/user/SignIn';
import Portal from './components/portal/Portal';

function App() {
  const [user, setUser] = useState<string | null>(null);
  const header = useRef();
  const services = useRef();
  const projects = useRef();
  const contact = useRef();

  return (
    <div className="app">
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar scrollTo={[header, services, projects, contact]} />
                <Hero scrollTo={contact} />
                <Service scrollTo={services} />
                <Project scrollTo={projects} />
                <Contact scrollTo={contact} />
                <Footer />
              </>
            }
          />

          <Route
            path="/display"
            element={
              <>
                <Navbar scrollTo={[header, services, projects, contact]} />
                <Display />
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<SignIn />} />
          <Route path="/login2" element={<Login />} />
          <Route path="/portal" element={<Portal />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;

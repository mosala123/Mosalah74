// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './component/Home';
import Projects from './component/Projects';
import Contactme from './component/Contactme';
import Navbar from './component/Navbar';
import Aboutme from './component/Aboutme';
import Allprojects from './component/Allprojects';

function App() {
  return (
    <>
      <Navbar /> 
      <Routes>
        <Route
          path="/Mosalah74"
          element={
            <>
              <Header />
              <Home />
              <Projects />
            </>
          }
        />
        <Route path="/contactme" element={<Contactme />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/projects" element={<Allprojects />} />
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;

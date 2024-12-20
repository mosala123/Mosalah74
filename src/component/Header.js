import React, { useState } from 'react';

import "./Header.css";
import { Navbar } from 'react-bootstrap';

const Header = () => {
 

  return (
    <>
       <Navbar />

      <div 
        className="  d-flex flex-column align-items-center justify-content-center text-center
         text-white bg-black "  
        style={{ fontFamily: "League Gothic" ,height:"77vh" , marginTop:"-20px",letterSpacing:"3px "}}
      >
        <h1>Mohamed Ibrahim Salah </h1>
        <p className="fw-bold " style={{ fontFamily: "League Spartan" ,fontSize:"22px",letterSpacing:"3px ",color:"#00adb5"}}>Frontend Developer</p>
      </div>
    </>
  );
};

export default Header;

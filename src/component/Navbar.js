// CustomNavbar.js
import React, { useState } from 'react';
import imagelogo from "../images/rpLogoWhite.png";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import "./Header.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div  className="header ">
      <div
        className="  
        bg-black text-white d-flex align-items-center justify-content-between position-relative"
        style={{ padding: " 20px 10% " }}
      >
        <div className="logo" >
          <img
            src={imagelogo}
            alt="Logo"
            className="img-fluid"
            style={{ width: "50px", height: "50px" }}
          />
        </div>
        <HiOutlineBars3BottomRight
          onClick={toggleMenu}
          className="fs-1"
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className={`fullscreen-menu    ${open ? "active" : ""}`}>
        <div className="close-btn" onClick={toggleMenu}>
          <IoMdClose />
        </div>
        <div className="row  ">
          <div className='col-lg-6 col-md-6 col-sm-12'>
          <ul className='text-start '>
          <li><a href="/Mosalah74">Home</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/aboutme">About Me</a></li>
          <li><a href="/contactme">Contact</a></li>
        </ul>
       
          </div>
          <div className=" col-lg-6 col-md-6 col-sm-12 mt-4">
          <div className="contact-info text-start col-sm-12">
          <a href="mailto:elmosalah74@gmail.con">elmosalah74@gmail.con</a>
          <p>+201024668770</p>
          <div className="social-icons">
          <a href='https://www.instagram.com/mo_salah_10_74?igsh=NDFudXdyc3YxaWg=' target='_blank'>
            <FaInstagram  />
            </a>
            <a href='https://www.linkedin.com/in/mohamed-salah-2527792a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank'>
            <FaLinkedinIn />
            </a>
            <a href='https://mosala123.github.io/Portfolio_1/' target='_blank'>
            <FaGithub />
            </a>
             
          
          
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

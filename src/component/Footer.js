import React from 'react';
import imagefooter from "../images/rpLogoWhite.png";
import "./Footer.css"
const Footer = () => {
  return (
    <div className="  text-white py-5 footer">
      <div className="container">
        <div className="row text-center">
          {/* Links Section */}
          <div className="col-12 col-md-4 mb-3 mb-md-0 text-sm-start ">
            <ul className="list-unstyled d-flex flex-column flex-md-row">
              <li><a href="/projects" className="text-white mx-2"  >Projects</a></li>
              <li><a href="/aboutme" className="text-white mx-2"  >About</a></li>
              <li><a href="/contactme" className="text-white mx-2"  >Contact</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-12 col-md-4 col-sm-5 mb-3 mb-md-0  text-md-start text-sm-center">
            <h5><a href="mailto:elmosalah74@gmail.com" className="text-white">elmosalah74@gmail.com</a></h5>
            <p className="mb-0">+201024668770</p>
          </div>

          {/* Logo Section */}
          <div className="col-12 col-md-4 col-sm-4 text-md-end text-sm-center">
            <img src={imagefooter} alt="Footer Logo" width="55" height="60" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

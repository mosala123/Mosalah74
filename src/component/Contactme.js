import React from 'react';
import "./Contactme.css"
const Contactme = () => {
  return (
    <div className="contactme">
      {/* Contact Me Section */}
      <div className="contactme-top text-center justify-content-center text-white py-4" style={{ backgroundColor: '#000000', height: '75vh', justifyContent:"center",display:"flex",flexDirection:"column",
        letterSpacing:"2px "
       }}>
        <h1>Contact Me</h1>
        <p style={{ letterSpacing: '4px' }}>SAY HELLO TO ME</p>
      </div>

      
  
      {/* Contact Form Section */}
      <div className=" footer py-5" style={{backgroundColor:"#000000",fontFamily:"League Gothic",padding:"0 15px "}}>
        <div className="container">
          <form>
            <div className="row  ">
              {/* Name Input */}
              <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
                <label htmlFor="name" className="form-label">Name</label>
                <input id="name" className="form-control  " type="text" placeholder="Your Name" required />
              </div>

              {/* Email Input */}
              <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
                <label htmlFor="email" className="form-label">Email</label>
                <input id="email" className="form-control  " type="email" placeholder="email@example.com" required />
              </div>

              {/* Message Input */}
              <div className="col-lg-12 col-md-12 col-sm-12 mb-4  ">
                <label htmlFor="message" className="form-label">Message</label>
                <input id="message" className="form-control    " placeholder="Hello, my name is..." rows="3"></input>
              </div>
            </div>
            {/* Submit Button */}
            <button className="btn   fs-5 d-block mx-auto py-2 px-4 mt-5" type="submit" style={{backgroundColor:"#D9D9D9"}}>Send message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactme;
import React from 'react';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaGitAlt, FaFigma } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { IoTvSharp } from "react-icons/io5";

const Home = () => {
  return (
    <div className="home py-2 px-2 w-100 w-lg-50" style={{margin:"1px 20px "}}>
      <div className="container">
        <h1 className="text-capitalize mb-4 mt-5" style={{ fontFamily: "League Spartan" }}>
          About Me
        </h1>

        <p className="fs-5 ">
          I am a <strong>web developer</strong> specializing in creating modern, responsive, and user-friendly web applications.
          My focus is on <strong>frontend development</strong> using technologies like <strong>React.js</strong> and <strong>Bootstrap</strong>, 
          while also integrating <strong>APIs</strong> to deliver dynamic and interactive user experiences.
        </p>
        <p className="fs-5 mt-3">
          I enjoy solving problems, learning new technologies, and turning creative ideas into functional designs.
          Currently, I’m working on projects involving eCommerce platforms, movie applications, and portfolio designs.
        </p>

        <h1 className="text-capitalize mb-4" style={{ fontFamily: "League Spartan" }}>My Skills</h1>
        
        <div className="home-skills d-flex flex-wrap gap-4 mb-5">
          {/* HTML */}
          <div className="home-skills-icons text-center d-flex gap-3 align-items-center" style={{ color: "#E34F26" }}>
            <FaHtml5 size={40} />
            <p className="mt-2">HTML</p>
          </div>

          {/* CSS */}
          <div className="home-skills-icons text-center d-flex gap-3" style={{ color: "#1572B6" }}>
            <FaCss3Alt size={40} />
            <p className="mt-2">CSS</p>
          </div>

          {/* Bootstrap */}
          <div className="home-skills-icons text-center d-flex gap-3" style={{ color: "#563D7C" }}>
            <FaBootstrap size={40} />
            <p className="mt-2">Bootstrap</p>
          </div>

          {/* JavaScript */}
          <div className="home-skills-icons text-center d-flex gap-3" style={{ color: "#F7DF1E" }}>
            <DiJavascript1 size={40} />
            <p className="mt-2">JavaScript</p>
          </div>

          {/* React */}
          <div className="home-skills-icons text-center d-flex gap-3" style={{ color: "#61DBFB" }}>
            <FaReact size={40} />
            <p className="mt-2">React.js</p>
          </div>

          {/* Git */}
          <div className="home-skills-icons text-center d-flex gap-3" style={{ color: "#F1502F" }}>
            <FaGitAlt size={40} />
            <p className="mt-2">Git</p>
          </div>

          {/* Figma */}
          <div className="home-skills-icons text-center d-flex gap-3" style={{ color: "#F24E1E" }}>
            <FaFigma size={40} />
            <p className="mt-2">Figma</p>
          </div>

          {/* VS Code */}
          <div className="home-skills-icons text-center d-flex gap-3" style={{ color: "#007ACC" }}>
            <IoTvSharp size={40} />
            <p className="mt-2">VS Code</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

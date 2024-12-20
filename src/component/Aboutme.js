import React from 'react';
import { GoArrowRight } from "react-icons/go";

const Aboutme = () => {
  return (
    <div>
      {/* القسم الأول: العنوان الرئيسي */}
      <div
        className="d-flex align-items-center justify-content-center flex-column text-white text-center "
        style={{ height: "70vh", letterSpacing: "2px", backgroundColor: "#000000" }}
      >
        <h1 className="fw-800">ABOUT ME</h1>
        <p className="mt-3  " style={{maxWidth:"76%"}}>
          I’m Mohamed Ibrahim Salah <span style={{color:"#00adb5",fontSize:"20px ",fontWeight:"600"}}>(Mohamed Salah)</span>, a passionate web developer dedicated to creating modern, interactive, and responsive designs.
        </p>
      </div>

      {/* القسم الثاني: معلومات عني */}
      <div className="bg-white py-4 p-2">
        <div className="container mt-4" style={{ maxWidth: "800px" }}>
          {/* فقرة 1: الخلفية */}
          <h3 className="mt-4 mb-3">My Background</h3>
          <p>
            I specialize in HTML, CSS, JavaScript, and React.js, with experience in responsive design using Bootstrap. I constantly improve my skills by learning online and staying updated with the latest industry trends.
          </p>

          {/* فقرة 2: المهارات */}
          <h3 className="mt-4">My Skills</h3>
          <p>
            I excel in technical and personal skills that help me build high-quality web applications. Key strengths include:
          </p>
          <ul>
            <li>Proficiency in React.js for building dynamic and interactive components.</li>
            <li>Responsive design expertise using Bootstrap and CSS.</li>
            <li>Collaboration and time management to ensure project success.</li>
          </ul>

          <h3 className="mt-4">My Hobbies and Interests</h3>
          <p>
            Outside of coding, I enjoy sports, especially supporting Al Ahly, reading, and traveling to explore new places. I also focus on improving my English proficiency to further my professional growth.
          </p>

          <h3 className="mt-4">Future Goals</h3>
          <p>
            I am currently enhancing my full-stack development skills and learning Node.js to broaden my technical capabilities. My goal is to work on impactful projects that merge creativity with functionality.
          </p>
        </div>

        {/* زر الاتصال */}
        <div
          className="d-flex align-items-center justify-content-center text-dark py-3 px-4 mx-auto mt-5 gap-3 mb-5"
          style={{
            width: "100%",
            maxWidth: "210px",
            cursor: "pointer",
            backgroundColor: "#D9D9D9"
          }}
        >
          <GoArrowRight className="display-6" />
          <a href="/contactme" className="text-decoration-none text-dark fs-5">
            Contact me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;

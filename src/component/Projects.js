import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from  "../images/download-removebg-preview (1).png";
import image2 from  "../images/download-removebg-preview (1).png";
import image3 from  "../images/download-removebg-preview (1).png";
import image4 from  "../images/download-removebg-preview (1).png";
import image5 from  "../images/download-removebg-preview (1).png";
import image6 from  "../images/download-removebg-preview (1).png";
import { GoArrowRight } from "react-icons/go";
import "./Projects.css";
import { Link } from "react-router-dom";

const Projects = () => {
  const AllSRC = [
    "https://mosala123.github.io/ecommerce-finnally/",
    "https://mosala123.github.io/fianalWeather/",
    "https://ahmedfathy112.github.io/",
    "https://mosala123.github.io/countdown1/",
    "https://mosala123.github.io/dragon-1/#",
    "https://mosala123.github.io/coffe-1/",
   
];

  const projects = [
    { id: 1, title: "Smart Shopping", descriptions: "Discover great deals online!", image: image1, src: AllSRC[0] },
    { id: 2, title: "Weather Updates", descriptions: "Get real-time weather forecasts.", image: image2, src: AllSRC[1] },
    { id: 3, title: "E-Shop Pro", descriptions: "Explore a complete e-commerce experience.", image: image3, src: AllSRC[2] },
    { id: 4, title: "Countdown App", descriptions: "Track time effortlessly.", image: image4, src: AllSRC[3] },
    { id: 5, title: "Film Dragon", descriptions: "Explore epic movies & stories.", image: image5, src: AllSRC[4] },
    { id: 6, title: "Coffee Lovers", descriptions: "Brewing the best coffee moments.", image: image6, src: AllSRC[5] },
  ];

  return (
    <div className="projects mt-5">
      <div className="container p-4">
        <div className="row">
          {projects.map((project) => (
        <div
        key={project.id}
        className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
    >
        <div
            className="card   project-card"
            style={{
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
                transition: "transform 0.3s, box-shadow 0.3s",
            }}
        >
            {/* الصورة */}
            <img
                src={project.image}
                alt={project.title}
                className="card-img-top"
                
            />
            {/* النصوص */}
            <div
                className="card-body text-center d-flex flex-column justify-content-between"
                style={{
                    backgroundColor: "#212529",
                    color: "white",
                    padding: "20px",
                }}
            >
                <h5
                    className="card-title"
                    style={{
                        fontWeight: "bold",
                        fontSize: "18px",
                        color: "#00adb5",
                    }}
                >
                    {project.title}
                </h5>
                <p
                    className="card-text"
                    style={{
                        fontSize: "14px",
                        color: "#e0e0e0",
                    }}
                >
                    {project.descriptions}
                </p>
                <a
                    href={project.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light"
                    style={{
                        fontWeight: "600",
                        borderColor: "#00adb5",
                        color: "#00adb5",
                    }}
                >
                    View
                </a>
            </div>
        </div>
    </div>
         
          ))}
        </div>
      </div>
      <div className="projects-links mt-5 mb-5">
        <a href="/projects" className="btn"><GoArrowRight className="gap-3 display-6" /> All Projects </a>
        <a href="/contactme" className="btn"> <GoArrowRight  className="gap-3 display-6"/> Contact Me </a>
      </div>
    </div>
  );
};

export default Projects;

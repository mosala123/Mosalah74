import React from 'react';
import image1 from  "../images/download-removebg-preview (1).png";
import image2 from  "../images/download-removebg-preview (1).png";
import image3 from  "../images/download-removebg-preview (1).png";
import image4 from  "../images/download-removebg-preview (1).png";
import image5 from  "../images/download-removebg-preview (1).png";
import image6 from  "../images/download-removebg-preview (1).png";
import image7 from  "../images/download-removebg-preview (1).png";
import image8 from  "../images/download-removebg-preview (1).png";
import image9 from  "../images/download-removebg-preview (1).png";
import image10 from "../images/download-removebg-preview (1).png";
import image11 from "../images/download-removebg-preview (1).png";
import image12 from "../images/download-removebg-preview (1).png";
import { GoArrowRight } from "react-icons/go";
import "./Allprojects.css"
const Allprojects = () => {
    const AllSRC = [
        "https://mosala123.github.io/ecommerce-finnally/",
        "https://mosala123.github.io/fianalWeather/",
        "https://ahmedfathy112.github.io/",
        "https://mosala123.github.io/countdown1/",
        "https://mosala123.github.io/dragon-1/#",
        "https://mosala123.github.io/coffe-1/",
        "https://mosala123.github.io/Portfolio_1/",
        "https://mosala123.github.io/updetecruds/",
        "https://mosala123.github.io/codelearn_/",
        "https://mosala123.github.io/-Contemporary-execution-/",
        "https://mosala123.github.io/ProductHub11/",
        "https://mosala123.github.io/mosalah10/"
    ];

    const Allproject = [
        { id: 1, title: "Smart Shopping", descriptions: "Discover great deals online!", image: image1, src: AllSRC[0] },
        { id: 2, title: "Weather Updates", descriptions: "Get real-time weather forecasts.", image: image2, src: AllSRC[1] },
        { id: 3, title: "E-Shop Pro", descriptions: "Explore a complete e-commerce experience.", image: image3, src: AllSRC[2] },
        { id: 4, title: "Countdown App", descriptions: "Track time effortlessly.", image: image4, src: AllSRC[3] },
        { id: 5, title: "Film Dragon", descriptions: "Explore epic movies & stories.", image: image5, src: AllSRC[4] },
        { id: 6, title: "Coffee Lovers", descriptions: "Brewing the best coffee moments.", image: image6, src: AllSRC[5] },
        { id: 7, title: "Portfolio Pro", descriptions: "Showcase your work with style.", image: image7, src: AllSRC[6] },
        { id: 8, title: "CRUD Manager", descriptions: "Simplify updates with ease.", image: image8, src: AllSRC[7] },
        { id: 9, title: "Code Learn", descriptions: "Learn coding interactively.", image: image9, src: AllSRC[8] },
        { id: 10, title: "Modern Execution", descriptions: "Innovative solutions for projects.", image: image10, src: AllSRC[9] },
        { id: 11, title: "Product Hub", descriptions: "Find and manage your products.", image: image11, src: AllSRC[10] },
        { id: 12, title: "Online Rosary", descriptions: "Spiritual moments at your fingertips.", image: image12, src: AllSRC[11] }
    ];
    

    return (
        <div>
            <div className="projects mt-5">
                <div
                    className="projects-home text-center"
                    style={{
                        fontFamily: "League Spartan",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "70vh",
                        backgroundColor: "#000000",
                        color: "white",
                        fontWeight: "600",
                        flexDirection: "column",
                        letterSpacing: "3px",
                    }}
                >
                    <h1>MY <br /> PROJECTS</h1>
                    <h4
                        style={{
                            letterSpacing: "1px",
                            color: "#00adb5",
                            fontWeight: "600",
                            padding:"1px 3px "
                        }}
                    >
                        Crafted with Passion and Dedication
                    </h4>
                </div>

                <div className="container mt-3 p-4">
    <div className="row">
        {Allproject.map((project) => (
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



                <div className="projects-links mt-5 mb-5 text-center">
                    <a className="btn " href='contactme' style={{backgroundColor:"#d9d9d9" ,padding:"10px 25px ",fontSize:"21px ",fontWeight:"600"}}>
                        <GoArrowRight className="gap-3 display-6" /> Contact Me
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Allprojects;

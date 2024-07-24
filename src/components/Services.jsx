import React from "react";
import Navbar from "./Navbar";
import "../App.css";
import frontend from '/frontend.png'
import backend from '/backend.png'
import responsive from '/responsive.png'

export default function Services() {
  return (
    <>
      <Navbar />
      <div className="page">
        <div className="section-heading">
          <div className="section-first-heading">
            <p>Services</p>
            <div className="section-line"></div>
          </div>

          <h2>My Services</h2>
        </div>

        <div className="service-content">
          <div className="services">
            <h2>Frontend Development</h2>
            <img src={frontend} alt="frontend" />
            <p>HTML, CSS, JavaScript, React, Next.js, Bootstrap, Tailwind CSS for tailored web solutions.</p>
          </div>
          <div className="services">
            <h2>Backend Development</h2>
            <img src={backend} alt="backend" />
            <p>Node.js, Express.js, MongoDB for robust server-side solutions and APIs.</p>
          </div>

          <div className="services">
            <h2>Responsive Design</h2>
            <img src={responsive} alt="responsive" />
            <p>Optimizing user experiences across devices for accessibility and engagement.</p>
          </div>
        </div>

      </div>
    </>
  );
}

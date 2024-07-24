import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <div className="home-navbar">
        <Navbar />
      </div>
      <div className="home-container">
        <div className="home-user-info">
          <h1>Gopal Pokhrel</h1>
          <p>
            I'M Passionate <span>Fullstack Developer</span>
          </p>
        </div>

        <div className={`navbar-item`}>
          <div>
            <Link to="/" className="navbar-link-item">
              Home
            </Link>
          </div>
          <div>
            <Link to="/about" className="navbar-link-item">
              About
            </Link>
          </div>
          <div>
            <Link to="/services" className="navbar-link-item">
              Services
            </Link>
          </div>
          <div>
            <Link to="/portfolio" className="navbar-link-item">
              Portfolio
            </Link>
          </div>
          <div>
            <Link to="/contact" className="navbar-link-item">
              Contact
            </Link>
          </div>
        </div>

        <div className="social-link">
          <Link
            to="https://www.facebook.com/gopal.pokhrel.12139/"
            className="social-link-icon"
          >
            <FaFacebookF size={20} />
          </Link>
          <Link
            to="https://www.instagram.com/gopal_pokhrel1/"
            className="social-link-icon"
          >
            <FaInstagram size={20} />
          </Link>
          <Link
            to="https://www.linkedin.com/in/gopal-pokhrel-868a23238/"
            className="social-link-icon"
          >
            <FaLinkedin size={20} />
          </Link>
          <Link
            to="https://github.com/gopalpokhrel1"
            className="social-link-icon"
          >
            <FaGithub size={20} />
          </Link>
        </div>

        <div className="svg">
          <svg viewBox="0 0 200 200">
            <path
              fill="#338da8f2"
              d="M47,-73.1C58.9,-65.6,65,-49,71,-33.2C77,-17.4,82.9,-2.3,82.1,12.7C81.3,27.7,73.8,42.5,63.3,55.1C52.8,67.7,39.4,78,24.6,81.1C9.9,84.2,-6.2,80.1,-22.6,75.8C-39,71.5,-55.6,67.1,-65.1,56.3C-74.5,45.6,-76.6,28.4,-77.2,12.2C-77.9,-4,-77,-19.4,-72.3,-34.5C-67.7,-49.6,-59.3,-64.4,-46.6,-71.5C-34,-78.6,-17,-78.1,0.3,-78.5C17.6,-79,35.2,-80.6,47,-73.1Z"
              transform="translate(100 100)"
            />
            <image
              href="/user-img.png"
              x="10"
              y="-20"
              width="190"
              height="190"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

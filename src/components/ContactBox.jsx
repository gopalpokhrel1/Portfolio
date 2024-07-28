import React from 'react'
import { Link } from 'react-router-dom'

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function ContactBox({heading, description, logo}) {
  return (
    <>
    <section className='contact-box'>
        <div className='contact-logo'>
            <img src={logo} alt="photo" />
        </div>

       <div className='contact-flex'>
       <div>
            <h2>{heading}</h2>
          {
            (heading=='Social Profiles') ? "":   <p className='contact-description'>{description}</p>
          }
        </div> 

        {
           (heading == "Social Profiles") ?
          ( 
             <div className="contact-social-link">
            <Link
              to="https://www.facebook.com/gopal.pokhrel.12139/"
              className="contact-link-icon"
            >
              <FaFacebookF size={20} />
            </Link>
            <Link
              to="https://www.instagram.com/gopal_pokhrel1/"
              className="contact-link-icon"
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              to="https://www.linkedin.com/in/gopal-pokhrel-868a23238/"
              className="contact-link-icon"
            >
              <FaLinkedin size={20} />
            </Link>
            <Link
              to="https://github.com/gopalpokhrel1"
              className="contact-link-icon"
            >
              <FaGithub size={20} />
            </Link>
        
          </div>) :""

     } 
       </div>
      
    </section>
    </>
  )
}

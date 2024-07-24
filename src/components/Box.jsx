import React from 'react'
import Redirect from '/link.png';
import Github from '/github.png';
import { Link } from "react-router-dom";
import '../App.css'

export default function Box({img, description,name, liveDemo, github}) {
    console.log(img)
  return (
    <>
    <div className='projects'>
        <div className='project-description'>
            <h2>{name}</h2>
            <img src={img} alt="img" />
            <p>{description}</p>
        </div>
        <div className='project-link'>
            <Link to={github} className='redirect-link1'>
            <img src={Github} alt="Github" />
            </Link>
            <Link to={liveDemo} className='redirect-link2'>
            <img src={Redirect} alt="Redirect"/>
            </Link>
        </div>
    </div>
    </>
  )
}

import React, { useState } from "react";
import "../App.css";
import logo from "/logo.png";
import { Link } from "react-router-dom";
import close from "/delete.png"
import menu from "/menu.png";

export default function Navbar() {
    const [display_nav, setDispaly_nav] = useState(false);
    const show_menu= ()=>{
        setDispaly_nav(true);
    }

    const close_menu= ()=>{
        setDispaly_nav(false);
    }
  return (
    <>
      <div className="navbar-container">
        <div className="logo-image">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <div className={`navbar-item ${display_nav ? "show-item" : ""}`}>
            <div>
                <Link to='/' className="navbar-link-item" activeClassName='active'>Home</Link>
            </div>
            <div>
                <Link to='/about' className="navbar-link-item"activeClassName='active'>About</Link>
            </div>
            <div>
                <Link to='/services' className="navbar-link-item"activeClassName='active'>Services</Link>
            </div>
            <div>
                <Link to='/portfolio' className="navbar-link-item" activeClassName='active'>Portfolio</Link>
            </div>
            <div>
                <Link to='/contact' className="navbar-link-item" activeClassName='active'>Contact</Link>
            </div>

            <div>
              <img src={close} alt="close..." className="close-icon" onClick={close_menu}/>
            </div>
        </div>

        <div className="menu-container">
            <img src={menu} alt="menu..." className="menu-icon" onClick={show_menu}/>
        </div>
      </div>
    </>
  );
}

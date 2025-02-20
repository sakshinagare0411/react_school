import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import Logo from '../Images/logo1.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"; // Import the bars icon

function Nav() {
  const [menu, setMenu] = useState("Home");
  const [navbar, setNavbar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '75px',
    backgroundColor: isScrolled ? '#2f61ac' : 'transparent',
    color: isScrolled ? '#fff' : '#000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 1000,
  };

  return (
    <nav className={`navbar fixed-top navbar-expand-lg transparent p-md-3 ${navbar ? "scrolled" : ""}`} style={navStyle}>
      {/* Navbar Brand */}
      <a className="navbar-brand">
        <img src={Logo} className="logo" alt="Logo" />
      </a>

      {/* Navbar Toggler Button */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded={navbar ? "true" : "false"}
        aria-label="Toggle navigation"
        onClick={() => setNavbar(!navbar)}
        style={{ color: isScrolled ? '#fff' : '#000', border: "none", outline: "none" }}
      >
       <FontAwesomeIcon icon={faBars}style={{color: "#ffffff",}} />
      </button>

      {/* Navbar Links */}
      <div className={`collapse navbar-collapse ${navbar ? 'show' : ''}`} id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <Link onClick={() => { handleScroll("home"); setMenu("Home"); }} className="nav-link text-white" to="/">Home</Link>
            {menu === "Home" && <hr />}
          </li>
          <li className="nav-item">
            <Link onClick={() => { handleScroll("about_section"); setMenu("About"); }} className="nav-link text-white" to="/about">About</Link>
            {menu === "About" && <hr />}
          </li>
          <li className="nav-item">
            <Link onClick={() => { handleScroll("notice_section"); setMenu("Notice"); }} className="nav-link text-white" to="/notice">Notice Board</Link>
            {menu === "Notice" && <hr />}
          </li>
          <li className="nav-item">
            <Link onClick={() => { handleScroll("contact"); setMenu("Contact"); }} className="nav-link text-white" to="/contact">Contact</Link>
            {menu === "Contact" && <hr />}
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link onClick={() => { handleScroll("student"); setMenu("Student"); }} className="nav-link text-white" to="/student">Student Portal</Link>
            {menu === "Student" && <hr />}
          </li>
          <li className="nav-item">
            <Link onClick={() => { handleScroll("teacher"); setMenu("Teacher"); }} className="nav-link text-white" to="/teacher">Teacher Portal</Link>
            {menu === "Teacher" && <hr />}
          </li>
          <li className="nav-item">
            <Link onClick={() => { handleScroll("achivement"); setMenu("Achievement"); }} className="nav-link text-white" to="/achievement">Achievements</Link>
            {menu === "Achievement" && <hr />}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

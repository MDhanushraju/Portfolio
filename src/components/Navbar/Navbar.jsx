import React, { useEffect, useState } from 'react';
import "./Nav.css";
import logo from "../assets/logo2.png";



export default function Navbar({ visible,light,setLight,setResume }) {
 



  let handleLightToggle = () => {
    setLight((prev) => !prev);
  };

  return (
    <nav className={`Nav ${visible ? 'visible' : 'hidden'}`}>
      <div className="navbar-brand"><img src={logo} alt="Logo" style={{height:'62px'}} /></div>
      <div className="nav-center">
  <a href="#home">Home</a>
  <a href="#about">About</a>
   {/* <a href="#Skill">Skills</a> */}
  <a href="#project">Projects</a>
  <a href="#contact">Contact</a>
      </div>
      <div className="nav-actions">
        <button onClick={handleLightToggle}>
          {light ? "☀️" : "🌑"}
        </button>
        <button className={`re `} onClick={(e)=>setResume(true)}>

       Resume
        </button>
        
      </div>
    </nav>
  );
}


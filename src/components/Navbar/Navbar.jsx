import React, { useEffect, useState } from 'react';
import "./Nav.css";
import logo from "../assets/logo2.png";



export default function Navbar({ visible, light, setLight, setResume }) {

let [open, setOpen] = useState(false);



  let handleLightToggle = () => {
    setLight((prev) => !prev);
  };

  return (
    <nav className={`Nav ${visible ? 'visible' : 'hidden'} `}>

      <div className="navbar-brand "><img src={logo} alt="Logo" style={{ height: '62px' }} /></div>
      <div className={`nav-center phone ${open ? 'open' : 'close'}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#project">Projects</a>
        <a href="#contact">Contact</a>
       <button className="btn btn-sm" onClick={() => setOpen(false)}>
          <i className="bi bi-x-circle cross"></i>
        </button>
        
         </div>
      <div className="nav-actions">
        <button className='btn ' onClick={handleLightToggle}>
          {light ? "☀️" : "🌑"}
        </button>
        <button className={`re btn `} onClick={(e) => setResume(true)}>
         Resume
        </button> 
        
        {!open && (
        <button className="btn btn-sm list" onClick={() => setOpen(true)}>
          <i className="bi bi-list"></i>
        </button>
      )}
       
      </div>
     
      
      </nav>
  );
}


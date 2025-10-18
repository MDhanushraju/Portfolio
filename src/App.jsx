import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer';
import "./App.css";
import About from './components/About/About';

import Skill from './components/Skills/Skill';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';



export default function App() {
  const [visible, setVisible] = useState(true);
  let [light,setLight]=useState(true)
  let [resume,setResume]=useState(false)
console.log(resume)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0 ) setVisible(true);
    
      else setVisible(false);
    };



    const handleDoubleClick = () => {
      setVisible(true);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("dblclick", handleDoubleClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("dblclick", handleDoubleClick);
    };
  }, []);
  

  return (
    <div className={light ? 'dark-mode' : 'light-mode'} style={{ minHeight: '100vh', width: '100vw' }}>
      <Navbar visible={visible} light={light} setLight={setLight} setResume={setResume} />
      <Home id='home' />
  <About id="about"/>
  <Skill/>
    
     {
      resume && <Resume  id="resume" setResume={setResume}/>
     }
    
<Contact id="contact"/>
    </div>
  );
}

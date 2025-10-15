import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer';
import "./App.css"
import About from './Components/About/About';
import Resume from './Components/Resume/Resume';



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
    
     {
      resume && <Resume id="resume" setResume={setResume}/>
     }
    
<Footer/>
    </div>
  );
}

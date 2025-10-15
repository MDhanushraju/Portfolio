import React from 'react';
import './About.css';
import profilePhoto from '../assets/IMG-20240927-WA0025.jpg';

export default function About() {
  return (
    <div className="about-container" id="about">
      <div className="photo-section">
        <img src={profilePhoto} alt="Profile" className="profile-photo" />
      </div>
      <div className="content-section">
        <h1>About Me</h1>
        <p>
          I am a Front-End Developer based in Bengaluru, India, with a Bachelor’s degree in Electronics and Communication Engineering from Saveetha Engineering College. I specialize in building responsive, high-quality web applications using React.js, JavaScript ES6, HTML5, CSS3, and Bootstrap.
        </p>
        <h3>Technical Skills</h3>
        <ul>
          <li>Frontend: React.js, JavaScript ES6, TypeScript (learning), HTML5, CSS3, Bootstrap</li>
          <li>Version Control & Tools: Git, GitHub, Redux, familiar with Tailwind CSS, Webpack, Vite</li>
          <li>Core Competencies: Responsive Design, Accessibility, RESTful API Integration, DOM Manipulation, Debugging, Cross-Browser Optimization</li>
          <li>Workflows: Agile, Scrum, Version Control, Collaboration</li>
        </ul>
        <h3>Selected Projects</h3>
        <ul>
          <li>Developed 10+ small-scale front-end applications including login forms, e-commerce pages, and responsive UIs with modular, maintainable code.</li>
          <li>Built a Food Recipe Website SPA using React.js integrated with RESTful APIs for dynamic recipe data.</li>
          <li>Applied Bootstrap grid system and custom CSS for mobile-first design, along with client-side routing for seamless navigation.</li>
          <li>Used GitHub for version control, branching, and issue tracking during project development.</li>
        </ul>
        <h3>Interests & Goals</h3>
        <p>
          I am passionate about improving my skills in front-end development and am eager to grow into a full-stack developer. I enjoy working on challenging projects, participating in coding challenges and hackathons, and collaborating with others in Agile and Scrum environments.
        </p>
      </div>
    </div>
  );
}

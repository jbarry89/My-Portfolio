import React from 'react';
import '../../styles/AboutMe.css';

export default function AboutMe() {
  return (
    <section className="about-me-section">
      <div className='about-me-content'>
        <h2 className="fade-in">About Me</h2>
        <p className="fade-in">My journey into web development began with a fascination 
          for how design and technology combine to create meaningful user interactions. While I 
          enjoy exploring all aspects of development, I’m especially enthusiastic about web design 
          and front-end development, where I can unleash my creativity and enhance user experiences 
          through responsive, intuitive designs.</p>
      </div>
      <img src="./assets/joel-bio-pic.png" alt="Profile Picture" />
    </section>
  );
}
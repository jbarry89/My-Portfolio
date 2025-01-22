import React from 'react';
import '../../styles/AboutMe.css';

export default function AboutMe() {
  return (
    <section className="about-me-section">
      <div>
        <h2>About Me</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Autem qui quibusdam ad unde placeat, nihil soluta, modi 
            exercitationem voluptates voluptatum maxime commodi nam. 
            Reiciendis consectetur dolor alias, cumque laborum eveniet!</p>
      </div>
      <img src="path-to-my-photo.jpg" alt="Profile Picture" />
    </section>
  );
}
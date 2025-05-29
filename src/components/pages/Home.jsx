import React from "react";
import "../../styles/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home-section">
      <div className="home-content">
        <h3 className="fade-in">
          Hello! I'm <span className="text-color">Joel</span>
        </h3>
        <p className="fade-in">
          A passionate web developer with a love for creating visually appealing
          and functional web experiences.
        </p>

        <Link to="/portfolio" className="view-work-btn fade-in">
          View My Work →
        </Link>
      </div>
      <img src="./assets/joel-bio-pic.png" alt="Profile Picture" />
    </section>
  );
}

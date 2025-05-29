import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import "../styles/App.css";

export default function Header() {
  return (
    <header className="header-background">
      <div className="header-content">
        <h1 className="header-title">Joel Barry</h1>
        <nav className="nav-container">
          <Link to="/" className="nav-link"><FaHome /></Link>
          <Link to="/aboutme" className="nav-link">About Me</Link>
          <Link to="/portfolio" className="nav-link">Portfolio</Link>
          <Link to="/contact" className="nav-link">Contact Me</Link>
          <Link to="/resume" className="nav-link">Resume</Link>
        </nav>
      </div>
    </header>
  );
}

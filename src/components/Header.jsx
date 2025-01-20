import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

export default function Header() {
  return (
    <header className="flex flex-col items-center bg-gray-100 border-b border-gray-200 p-4">
      <div className="flex justify-between w-full max-w-screen-lg">
        <h1 className="text-lg font-bold">Joel Barry</h1>
        <nav className="flex space-x-4">
          <Link to="/" className="text-gray-800 hover:text-blue-600">About Me</Link>
          <Link to="/portfolio" className="text-gray-800 hover:text-blue-600">Portfolio</Link>
          <Link to="/contact" className="text-gray-800 hover:text-blue-600">Contact Me</Link>
          <Link to="/resume" className="text-gray-800 hover:text-blue-600">Resume</Link>
        </nav>
      </div>
      <div className="w-full max-w-screen-lg mt-4">
        <img src="./assets/blue-hero-banner.jpg" alt="Blue Gradient backkground" className="w-full h-auto rounded-lg"/>
      </div>
    </header>
  );
}

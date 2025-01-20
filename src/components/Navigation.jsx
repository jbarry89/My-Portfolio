import React from 'react';
import { Link } from 'react-router-dom';


export default function Navigation() {
    return (
        <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
            <div className='container py-2 flex md:justify-center md: justify-between items-center'>
                <div className= 'text-2xl font-bold'>Joel Barry</div>
                <div className= 'space-x-6'>
                    <li><Link to="/">About Me</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/contact">Contact Me</Link></li>
                    <li><Link to="/resume">Resume</Link></li>
                </div>
            </div>
            <ul>
          
            </ul>
        </nav>
    );
}

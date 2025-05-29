import React from 'react';
import '../../styles/Resume.css';
export default function Resume(){
    return(
        <section className='resume-section'>
            <h2>Resume</h2>
            <a href="/joel-resume-web-Dev.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
            <h3> Front-End Proficiencies</h3>
            <ul>
                <li>HTML5</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Tailwind CSS, Bootstrap, Chakra UI</li>
                <li>SQL Query</li>
                <li>React</li>

            </ul>
            <h3> Back-End Proficiencies</h3>
            <ul>
                <li>NodeJS</li>
                <li>ExpressJS</li>
                <li>RESTful APIs</li>
                <li>MongoDB</li>
                <li>JWT Authentication</li>
            </ul>
            
        </section>
    );

}
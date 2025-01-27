import React from 'react';
import '../../styles/Resume.css';
export default function Resume(){
    return(
        <section className='resume-section'>
            <h2>Resume</h2>
            <a href="/resume-template.pdf" download>Download Resume</a>
            <h3> Front-End Proficiencies</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>SQL Query</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>

            </ul>
            <h3> Back-End Proficiencies</h3>
            <ul>
                <li>NodeJS</li>
                <li>ExpressJS</li>
                <li>API's</li>
            </ul>
            
        </section>
    );

}
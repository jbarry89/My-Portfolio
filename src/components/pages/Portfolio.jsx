import React from 'react';
import Project from '../Project';
import '../../styles/Portfolio.css';


export default function Portfolio(){
    const projects = [
        {
            title: 'TriviaMania Game',
            image: './src/assets/trivia-game.jpg',
            liveURL: 'https://dchica25.github.io/Trivia-game-project/',  // Get the actual link to the project demo
            gitHubURL: 'https://github.com/Dchica25/Trivia-game-project',  // Get the actual link to the project demo
        },
        {
            title: 'Vehicle Builder Application',
            image: './src/assets/vehicle-builder.png',
            liveURL: 'https://drive.google.com/file/d/16KyDe_zXEui27vndjN_NUxvC63fjBEIO/view',  // Get the actual link to the project demo
            gitHubURL: 'https://github.com/jbarry89/Vehicle-Builder',  // Get the actual link to the project demo
        },
        {
            title: 'Employee-Database SQL',
            image: './src/assets/employee-database.jpg',
            liveURL: 'https://drive.google.com/file/d/1hf-K3BImls_JNzbRcdGZIF6C9tz5MF0O/view',  // Get the actual link to the project demo
            gitHubURL: 'https://github.com/jbarry89/Employee-Database-Application',  // Get the actual link to the project demo
        },
        {
            title: 'Weather-Dashboard API',
            image: './src/assets/weather-dashboard-screenshot.png',
            liveURL: 'https://drive.google.com/file/d/1fdIK35gxklZhVUViSZdUWjV_7RyqdVZX/view',  // Get the actual link to the project demo
            gitHubURL: 'https://github.com/jbarry89/Weather-Dashboard-Application',  // Get the actual link to the project demo
        }

    ];

    return (
        <div className='portfolio'>
            <h2>Portfolio</h2>
            <div className='portfolio-grid'>
                {projects.map((project, index) =>(
                    <Project
                        key={index} 
                        title= {project.title}
                        image={project.image}
                        liveURL= {project.liveURL}
                        gitHubURL={project.gitHubURL}          
                    />
                ))}
            </div>
        </div>
    );
}
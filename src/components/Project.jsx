import React from 'react';
import '../styles/Project.css';

export default function Project({title, image, liveURL, gitHubURL}) {
    return (
        <div className='project-card'>
            <img src={image} alt={`${title} screenshot`} className='project-image' />
            <h3>{title}</h3>
            <div className='icons'>
                <a href={liveURL} target="_blank" rel="noopener noreferrer" className='icon'>
                    <i className='fas fa-external-link-alt'></i> Live Demo
                </a>
             <a href={gitHubURL} target="_blank" rel='noopener noreferrer' className='icon'>
                <i className='fab fa-github'></i> GitHub</a>
            </div>
        </div>
    );
}
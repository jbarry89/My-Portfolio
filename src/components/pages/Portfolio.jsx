import React from 'react';
import Project from '../Project';

export default function Portfolio(){
    const projects = [
        {
            title: 'Project 1',
            image: 'path-to-the-image.jpg',
            liveLink: 'https://live-demp-link-url.com',  // Get the actual link to the project demo
            repoLink: 'https://github.com/userName',  // Get the actual link to the project demo
        },
        {
            title: 'Project 2',
            image: 'path-to-the-image.jpg',
            liveLink: 'https://live-demp-link-url.com',  // Get the actual link to the project demo
            repoLink: 'https://github.com/userName',  // Get the actual link to the project demo
        },
        {
            title: 'Project 3',
            image: 'path-to-the-image.jpg',
            liveLink: 'https://live-demp-link-url.com',  // Get the actual link to the project demo
            repoLink: 'https://github.com/userName',  // Get the actual link to the project demo
        }

    ];

    return (
        <section>
            <h2>Portfolio</h2>
            {projects.map((project, index) =>(
                <Project key={index} {...project} />
            ))}
           
        </section>
    );

}
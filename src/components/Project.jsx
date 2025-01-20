import React from 'react';

export default function Project({title, image, appLink, repoLink}) {
    return (
        <div>
            <h3>{title}</h3>
            <img src={image} alt={`${title} screenshot`} />
            <div>
             <a href={appLink} target="_blank" rel="noopener noreferrer">Deployed App</a>
             <a href={repoLink} target="_blank" rel='noopener noreferrer'>GitHub Repo</a>
            </div>
        </div>
    );

}
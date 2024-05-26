import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Ensure the path to your CSS file is correct
import image1 from '../assets/Imagen1.jpg'; // Ensure the path to your image is correct

const Grid = () => {
    // Array of projects with different images, titles, and descriptions
    const projects = [
        {
            id: 1,
            image: image1,
            title: 'Days',
            description: 'IOS Countdown App'
        },
        {
            id: 2,
            image: image1, // Example of a different image path
            title: 'Nights',
            description: 'IOS gfr App'
        },
        {
            id: 3,
            image: image1, // Example of another different image path
            title: 'REFG',
            description: 'IOS egr App'
        },
        {
            id: 4,
            image: image1, // Example of another different image path
            title: 'GE',
            description: 'IOS ge App'
        },
        {
            id: 5,
            image: image1, // Example of another different image path
            title: 'GER',
            description: 'IOS ger App'
        },
    ];

    return (
        <div className="grid slide delay02">
            {projects.map((project) => (
                <Link to={`/project${project.id}`} className="work-item" key={project.id}>
                    <div className="work-item-image">
                        <img src={project.image} alt="Project Thumbnail" />
                    </div>
                    <div className="work-item-info">
                        <div className="work-item-company">{project.title}</div>
                        <div className="work-item-description">{project.description}</div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Grid;
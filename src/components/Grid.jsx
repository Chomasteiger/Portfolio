import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Ensure the path to your CSS file is correct
import image1 from '../assets/Project1/Imagen5.jpg';
import image2 from '../assets/Project2/Imagen 6.jpg';
import image3 from '../assets/Project3/Portada.jpg';
import image4 from '../assets/Project4/Portada.jpg';

const Grid = () => {
    // Array of projects with different images, titles, and descriptions
    const projects = [
        {
            id: 1,
            image: image1,
            title: 'Pasco Central',
            description: 'Website for rental Football field store'
        },
        {
            id: 2,
            image: image2, // Example of a different image path
            title: 'Netflix',
            description: 'Improving UI Skills'
        },
        {
            id: 3,
            image: image3, // Example of another different image path
            title: 'MenuHop',
            description: 'A restaurant App'
        },
        {
            id: 4,
            image: image4, // Example of another different image path
            title: 'Go Service',
            description: 'A home services App'
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
import React from 'react';
import '../index.css';
import image1 from '../assets/Project5/Imagen1.jpg';
import image2 from '../assets/Project5/Imagen2.jpg';
import image3 from '../assets/Project5/Imagen3.jpg';


const Project4 = () => {
    return (
        <div>
            <div className="header slide">
                <a href="/" className="logo">Thomas Delli Antoni</a>
                <a href="/about">About</a>
            </div>

            <div className="work-page slide delay01">
                <div className="work-page-content">
                    <h1>Designing my portfolio</h1>
                    <h3 className="text">
                    My portfolio showcases a variety of projects where I have utilized my expertise in UX,UI and Front End.
                    </h3>
                    <p>
                    My design process is iterative and user-centered. I start with wireframes to map out the structure and functionality. This step allows for easy adjustments and feedback incorporation before moving to high-fidelity designs. Using Figma, I transform these wireframes into visually stunning interfaces.
                    </p>
                    <p>
                    Once the design is finish, I bring it to life through coding. I am proficient in HTML, CSS, JavaScript with a basic foundation of React, which allows me to build responsive and dynamic web pages. My coding skills ensure that the final product is pixel-perfect and functions smoothly across all devices. This combination of design and coding expertise sets me apart in the industry.
                    </p>
                    <p>
                    n my portfolio, you will find examples of various projects, from websites to mobile apps.
                    Each project highlights my ability to adapt to different styles and requirements. Whether it's a sleek, modern interface or a playful, vibrant design, I can deliver exceptional results. My work demonstrates a balance of creativity and technical proficiency.
                    </p>
                    <p>
                    The new system enhanced the user experience, making the reservation process seamless for customers and significantly improving operational efficiency for the staff. By prioritizing both customer and employee needs, we created a more efficient and enjoyable experience for everyone involved.
                    </p>
                    <p>
                    By focusing on the end-user and leveraging my skills in wireframing, design, and coding, I ensure that every project is a success. 
                    </p>
                    <p>
                    Explore my portfolio to see the full range of my capabilities.
                    </p>
                    <p>
                        <a href="/">Website</a>
                        <a href="https://github.com/Chomasteiger/Portfolio" target="_blank" rel="noopener noreferrer">Check the code here!</a>
                    </p>
                </div>
                <img src={image1} className="work-page-image" alt="Work Page" />
                <img src={image2} className="work-page-image" alt="Work Page" />
                <img src={image3} className="work-page-image" alt="Work Page" />



                <div className="back-to-projects">
                    <a href="/">Back to all project</a>
                </div>
            </div>
            <footer className="slide delay03">@ Thomas Delli Antoni 2024</footer>
        </div>
    );
}

export default Project4;
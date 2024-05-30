import React from 'react';
import '../index.css';
import image1 from '../assets/Project4/Imagen1.jpg';
import image2 from '../assets/Project4/Imagen 2.jpg';
import image3 from '../assets/Project4/Imagen 3.jpg';
import image4 from '../assets/Project4/Imagen 4.jpg';


const Project3 = () => {
    return (
        <div>
            <div className="header slide">
                <a href="/" className="logo">Thomas Delli Antoni</a>
                <a href="/about">About</a>
            </div>

            <div className="work-page slide delay01">
                <div className="work-page-content">
                    <h1>Go Service</h1>
                    <h3 className="text">
                    The idea for a home services application emerged from a conversation with a friend about the difficulties of finding reliable domestic services in Argentina. In this market, securing trustworthy service providers typically relies on personal recommendations, which can be limiting and inefficient. This realization drove us to explore how we could simplify and improve the process for both service seekers and providers. 
                    </h3>
                    <p>
                    We began our project with comprehensive user research to understand the pain points and needs of both customers and service professionals. Through interviews, surveys, and focus groups, we gathered insights into the current challenges faced by users. Customers expressed frustration with the lack of transparent information and the difficulty in finding available service providers, while professionals highlighted the need for a reliable platform to manage bookings and payments.
                    </p>
                    <p>
                    With our personas and user journeys in mind, we created wireframes and low-fidelity prototypes focusing on essential user flows, such as service search, booking, and profile management. We conducted usability testing with real users to gather feedback and iterate on our designs. These tests revealed the importance of a clean, intuitive interface and the necessity of features like ratings, reviews, and secure payment options to build user trust.
                    </p>
                    <p>
                    After several iterations and continuous user feedback, we refined our prototypes into high-fidelity designs. The final design features a user-friendly interface with clear navigation and a modern aesthetic that conveys professionalism and trust. Advanced search filters, notification systems, and secure payment integration were added to enhance usability and convenience. By prioritizing user needs and incorporating their feedback throughout the design process, we created an application that simplifies the search for domestic services and supports professionals in managing their business efficiently.
                    </p>
                    
                </div>
                <img src={image1} className="work-page-image" alt="Work Page" />
                <img src={image2} className="work-page-image" alt="Work Page" />
                <img src={image4} className="work-page-image" alt="Work Page" />
                <img src={image3} className="work-page-image" alt="Work Page" />


                <div className="back-to-projects">
                    <a href="/">Back to all project</a>
                </div>
            </div>
            <footer className="slide delay03">@ Thomas Delli Antoni 2024</footer>
        </div>
    );
}

export default Project3;
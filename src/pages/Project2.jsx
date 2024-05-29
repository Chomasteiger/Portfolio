import React from 'react';
import '../index.css';
import image1 from '../assets/Project1/Imagen1.jpg';
import image2 from '../assets/Project1/Imagen2.jpg';
import image3 from '../assets/Project1/Imagen3.jpg';
import image5 from '../assets/Project1/Imagen5.jpg';
import image6 from '../assets/Project1/Imagen6.jpg';
import image7 from '../assets/Project1/Imagen7.jpg';
import image8 from '../assets/Project1/Imagen8.jpg';
import image9 from '../assets/Project1/Imagen9.jpg';


const Project2 = () => {
    return (
        <div>
            <div className="header slide">
                <a href="/" className="logo">Thomas Delli Antoni</a>
                <a href="/about">About</a>
            </div>

            <div className="work-page slide delay01">
                <div className="work-page-content">
                    <h1>Project2</h1>
                    <h3 className="text">
                        Pasco Central is a soccer field rental company where people gather daily to enjoy soccer with friends, participate in tournaments, and practice training.
                    </h3>
                    <p>
                    I engaged in constant communication with the owner, discussing the current workflow and gathering insights. This collaborative approach ensured that I understood the needs and pain points from the management's perspective. UX Tip: Involve stakeholders early and often to align the project goals with business objectives.
                    </p>
                    <p>
                    I also spoke with customers to understand their experience and pain points from their perspective. Through several interviews, we concluded that a mobile app wouldn't be widely adopted by our customers. Instead, we discovered that a website would allow clients to make reservations easily without needing to call the establishment. UX Tip: Conduct user research to validate assumptions and ensure the solution addresses real user needs.
                    </p>
                    <p>
                    For the employees, we implemented an internal application to automate the system completely. This solution eliminated the cumbersome paperwork and streamlined operations at Pasco Central. UX Tip: Focus on user-friendly design and intuitive interfaces to reduce training time and improve adoption rates among employees.
                    </p>
                    <p>
                    The new system enhanced the user experience, making the reservation process seamless for customers and significantly improving operational efficiency for the staff. By prioritizing both customer and employee needs, we created a more efficient and enjoyable experience for everyone involved.
                    </p>
                    <p>
                    Continuously gather feedback post-launch to iterate and refine the system, ensuring it remains aligned with user needs over time.
                    </p>
                    <p>
                        <a href="#">Days on The App Store</a>
                        <a href="#">Days Website</a>
                    </p>
                </div>
                <img src={image1} className="work-page-image" alt="Work Page" />
                <img src={image2} className="work-page-image" alt="Work Page" />
                <img src={image3} className="work-page-image" alt="Work Page" />
                <img src={image5} className="work-page-image" alt="Work Page" />
                <img src={image6} className="work-page-image" alt="Work Page" />
                <img src={image7} className="work-page-image" alt="Work Page" />
                <img src={image8} className="work-page-image" alt="Work Page" />
                <img src={image9} className="work-page-image" alt="Work Page" />


                <div className="back-to-projects">
                    <a href="#">Back to all project</a>
                </div>
            </div>
            <footer className="slide delay03">@ Thomas Delli Antoni 2024</footer>
        </div>
    );
}

export default Project2;
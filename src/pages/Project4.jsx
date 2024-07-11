import React from 'react';
import '../index.css';
import image1 from '../assets/Project3/1.jpg';
import image2 from '../assets/Project3/2.jpg';
import image3 from '../assets/Project3/3.jpg';
import image4 from '../assets/Project3/4.jpg';
import image5 from '../assets/Project3/5.jpg';

const Project4 = () => {
    return (
        <div>
            <div className="header slide">
                <a href="/" className="logo">Thomas Delli Antoni</a>
                <a href="/about">About</a>
            </div>

            <div className="work-page slide delay01">
                <div className="work-page-content">
                    <h1>MenuHop</h1>
                    <h3 className="text">
                        MenuHop is an innovative app designed to transform the dining experience by allowing customers to order food and drinks, pay their bills, and reserve tables directly from their phones. This integration of key functionalities eliminates the need for traditional menus and reduces wait times, enhancing service efficiency and customer satisfaction.
                    </h3>
                    <p>
                    One of MenuHop's standout features is its table reservation system. Customers can easily book a table at their favorite restaurant with just a few taps, securing their spot without the hassle of phone calls or waiting in line. This not only improves the customer experience but also helps restaurants manage their seating more efficiently.
                    </p>
                    <p>
                    The user experience design of MenuHop includes a wood background that emulates the warm, inviting atmosphere of a traditional dining environment. This design choice aims to create a smooth transition from the physical restaurant to the digital interface, making users feel more comfortable while navigating the app. The wood background is both aesthetically pleasing and evokes a sense of warmth and familiarity.
                    </p>
                    <p>
                    MenuHop represents a significant UX project, highlighting the importance of user-friendly design and functionality in the restaurant industry. By integrating features such as menu browsing, order placement, bill payment, and table reservations, all wrapped in a visually appealing interface, MenuHop addresses common pain points for both customers and restaurant staff.
                    </p>
                    <p>
                    The new system enhanced the user experience, making the reservation process seamless for customers and significantly improving operational efficiency for the staff. By prioritizing both customer and employee needs, we created a more efficient and enjoyable experience for everyone involved.
                    </p>
                    <p>
                    In summary, MenuHop not only modernizes restaurant services but also sets a new standard for convenience and efficiency in the culinary world. The combination of modern technology with a cozy and functional design significantly enhances the dining-out experience, benefiting everyone involved.
                    </p>

                </div>
                <img src={image1} className="work-page-image" alt="Work Page" />
                <img src={image2} className="work-page-image" alt="Work Page" />
                <img src={image3} className="work-page-image" alt="Work Page" />
                <img src={image4} className="work-page-image" alt="Work Page" />
                <img src={image5} className="work-page-image" alt="Work Page" />


                <div className="back-to-projects">
                    <a href="/">Back to all projects</a>
                </div>
            </div>
            <footer className="slide delay03">@ Thomas Delli Antoni 2024</footer>
        </div>
    );
}

export default Project4;
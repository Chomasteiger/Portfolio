import React from 'react';
import '../index.css';
import image1 from '../assets/Imagen1.jpg';

const Project = () => {
    return (
        <div>
            <div className="header slide">
                <a href="/" className="logo">Thomas Delli Antoni</a>
                <a href="/about">About</a>
            </div>

            <div className="work-page slide delay01">
                <div className="work-page-content">
                    <h1>Days App</h1>
                    <h3 className="text">
                        Days is a beautiful countdown app to all the events that matter to you. Events are important, they're the small things in life that matter the most. Whether it's a wedding, a holiday or just a night out with your friends.
                    </h3>
                    <p>
                        Days started as a side project back in 2015 when I entered and won a design contest. This event sparked the beginning of a new business venture and a lasting friendship with Matt Davenport, an iOS developer from Manchester, UK. Over the years, we've teamed up on various iOS projects, but Days has always remained our primary focus and passion. We're committed to constant improvement, iteration, and, above all, learning, to ensure our users' satisfaction.
                    </p>
                    <p>
                        As the lead designer of Days, I played a pivotal role in shaping the app's brand, framework, and user experience. From designing the app's interface to marketing materials and developing the website, my involvement spanned across various aspects of the app's identity and success, even refining app animations in Swift and Objective-C. Collaborating closely with Matt, we analyzed customer feedback, identified requirements, and prioritized business goals to drive the app's growth and revenue.
                    </p>
                    <p>
                        To optimize user engagement and conversion, we conducted A/B tests on various features and parts of the interface, including the upgrade screen and pricing models. Through these tests, we gained valuable insights into user behavior and preferences, allowing us to refine our strategies and improve the app's performance continually.
                    </p>
                    <p>
                        Days received widespread recognition and praise, with features on the Apple App Store and endorsements from Apple's SVP of Marketing, Greg Joswiak. By focusing on delivering a delightful user experience and leveraging customer feedback, Days achieved remarkable success and established itself as a top-tier app in the iOS ecosystem.
                    </p>
                    <p>
                        Despite its success, we faced challenges such as balancing free events and revenue generation and optimizing the app for different user preferences. By listening to customer feedback and iterating on the app's features, we addressed these challenges and improved the app's overall usability and satisfaction. Additionally, we learned the importance of adopting an agile development approach and fostering a strong sense of community within our user base.
                    </p>
                    <p>
                        <a href="#">Days on The App Store</a>
                        <a href="#">Days Website</a>
                    </p>
                </div>
                <img src={image1} className="work-page-image" alt="Work Page" />
                <div className="video-iphone">
                    <div className="video-iphone-inner">
                        <video poster="" preload="none" autoplay loop muted playsInline>
                            <source src="" type="video/mp4" />
                        </video>
                        <div className="device-iphone12"></div>
                    </div>
                </div>
                <img src={image1} className="work-page-image" alt="Work Page" />
                <img src={image1} className="work-page-image" alt="Work Page" />
                <img src={image1} className="work-page-image" alt="Work Page" />
                <img src={image1} className="work-page-image" alt="Work Page" />
                <img src={image1} className="work-page-image" alt="Work Page" />
                <img src={image1} className="work-page-image" alt="Work Page" />

                <div className="back-to-projects">
                    <a href="#">Back to all project</a>
                </div>
            </div>
            <footer className="slide delay03">@ Thomas Delli Antoni 2024</footer>
        </div>
    );
}

export default Project;

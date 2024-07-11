import React, { useEffect } from 'react';
import ClipboardJS from 'clipboard';
import '../index.css';
import profile from '../assets/photo_thomas.jpg';



const About = () => {

    useEffect(() => {
        const clipboard = new ClipboardJS('#copyemail');

        clipboard.on('success', function(e) {
            document.getElementById('copyemail').textContent = 'Email Copied';

            setTimeout(() => {
                document.getElementById('copyemail').textContent = 'hey@dejan.works';
            }, 2000);
        });

        return () => clipboard.destroy();
    }, []);

    return (
        <div>
            <div className="header slide">
                <a href="/" className="logo">Thomas Delli Antoni</a>
                <a href="/">Work</a>
            </div>

            <div className="about-page slide delay01">
                <div className="about">
                    <h2>Junior multimedia designer specialized in UX, UI, logos and websites.</h2>
                    <p className="text">
                    My journey into the world of design started with a comprehensive UX Design certification from Google and Coursera. I obtained skills that have been crucial in shaping my approach to design, ensuring that every project I work on is user-centric and accessible.
                    </p>
                    <p className="text">
                    Currently, I'm expanding my expertise with the "Master Digital Design with Adobe Photoshop" course on Udemy. This has been an exciting venture, allowing me to master the art of photo editing and graphic creation. I love how Photoshop empowers me to transform simple ideas into visually stunning realities, making each project unique and impactful.
                    </p>
                    <p className="text">
                    My learning journey didn't stop there. I also took specialized courses in Adobe Illustrator and Google Analytics on Domestika. Adobe Illustrator has been a fantastic tool for creating detailed vector illustrations, while Google Analytics has opened my eyes to the power of data in design. Understanding user behavior through analytics helps me make informed decisions that enhance user experience and achieve project goals.
                    </p>
                    <p className="text">
                    Web design and development are also areas I'm deeply invested in. I've trained in WordPress using Elementor, gaining the skills to build and customize beautiful, functional websites.
                    </p>
                    <p className="text">
                    Overall, I'm a multimedia designer driven by a love for innovation and a commitment to excellence. I thrive on creating designs that not only look great but also serve a purpose and resonate with users. My continuous learning and diverse skill set enable me to adapt to new challenges and stay ahead in the ever-evolving digital landscape. I am excited about the future of design and look forward to contributing to meaningful and impactful projects.
                    </p>
                </div>
                <img src={profile} className="photo-thomas" alt="Thomas" />
                <div className="about">
                    <h4>Work Experience</h4>
                    <div className="multi-row-grid">
                        <div className="multi-row">
                            <p className="title">CEO</p>
                            <p className="entity">Køkken</p>
                            <p className="years">June 2024 - Today</p>
                        </div>
                    </div>
                    <div className="multi-row-grid">
                        <div className="multi-row">
                            <p className="title">Junior Colaborator</p>
                            <p className="entity">Toque Digital</p>
                            <p className="years">November 2023 - March 2024</p>
                        </div>
                    </div>
                    <h4>Education</h4>
                    <div className="multi-row">
                        <p className="title">Digital Design Mater with Adobe Photoshop</p>
                        <p className="entity">Udemy</p>
                        <p className="years">07/2024 - Today</p>
                    </div>
                    <div className="multi-row">
                        <p className="title">Adobe Illustrator</p>
                        <p className="entity">Domestika</p>
                        <p className="years">06/2024 - 06/2024</p>
                    </div>
                    <div className="multi-row">
                        <p className="title">Google Analytics</p>
                        <p className="entity">Domestika</p>
                        <p className="years">06/2024 - 06/2024</p>
                    </div>
                    <div className="multi-row">
                        <p className="title">Wordpress + Elementor</p>
                        <p className="entity">Coursera + Domestika</p>
                        <p className="years">05/2024 - 05/2024</p>
                    </div>
                    <div className="multi-row">
                        <p className="title">Full Stack JavaScript</p>
                        <p className="entity">The Odin Project</p>
                        <p className="years">04/2024 - 05/2024</p>
                    </div>
                    <div className="multi-row">
                        <p className="title">HTML, CSS and JavaScript Foundations</p>
                        <p className="entity">The Odin Project</p>
                        <p className="years">03/2024</p>
                    </div>
                    <div className="multi-row">
                        <p className="title">Professional Certificate in UX Design</p>
                        <p className="entity">Google, Coursera</p>
                        <p className="years">07/2023 - 02/2024</p>
                    </div>
                    <div className="multi-row">
                        <p className="title">Bachelor in Economy</p>
                        <p className="entity">Colegio Manuel Belgrano, Buenos Aires, Argentina</p>
                        <p className="years">2003 - 2018</p>
                    </div>
                    <h4>Disciplines</h4>
                    <div className="multi-row-grid">
                        <p>End-to-End Product Design</p>
                        <p>User Experience Design</p>
                        <p>Interface Design</p>
                        <p>Interaction Design</p>
                        <p>Front-End</p>
                        <p>Research</p>
                    </div>
                    <h4>Contact</h4>
                    <p>Feel free to reach out for projects.</p>
                    <p>Currently seeking new opportunities.</p>
                    <div className="multi-row contact-options">
                        <a id="copyemail" data-clipboard-text="thomi.delli@gmail.com">thomi.delli@gmail.com</a>
                        <a href="https://www.linkedin.com/in/thomasdelli/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                        <a href="https://github.com/Chomasteiger" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>
            </div>

            <footer className="slide delay02">@ Thomas Delli Antoni 2024</footer>
        </div>
    );
}

export default About;

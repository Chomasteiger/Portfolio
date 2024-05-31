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
                    <h2>Junior product designer specialized in UX, UI and Front-End</h2>
                    <p className="text">
                    With a solid foundation in UX/UI design and Front-End development, I have started my professional career working on a variety of individual projects. Despite my status as a junior professional, I have enthusiastically faced numerous challenges, learning and adapting quickly to new technologies and work methods.
                    </p>
                    <p className="text">
                    I have had the opportunity to collaborate with colleagues on projects from their initial stages to their upcoming implementation. My focus on problem-solving has allowed me to develop efficient and effective solutions, always striving to improve and optimize every aspect of the process.
                    </p>
                    <p className="text">
                    With a creative mindset and a strong orientation towards user-centered design, I specialize in creating attractive and functional user interfaces. My design process is flexible and easily adapts to the specific needs of each project, encompassing everything from initial research to final evaluation.
                    </p>
                    <p className="text">
                    I am committed to continuous improvement, always seeking to learn and acquire new skills that will allow me to grow both professionally and personally.
                    </p>
                    <p className="text">
                    My main motivation is to create products that are not only functional but also provide an excellent user experience. I firmly believe that a collaborative and supportive work environment is key to success, and I strive to positively contribute to the team culture and product quality.
                    </p>
                </div>
                <img src={profile} className="photo-thomas" alt="Thomas" />
                <div className="about">
                    <h4>Work Experience</h4>
                    <div className="multi-row-grid">
                        <div className="multi-row">
                            <p className="title">Junior Colaborator</p>
                            <p className="entity">Toque Digital</p>
                            <p className="years">November 2023 - March 2024</p>
                        </div>
                    </div>
                    <h4>Education</h4>
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

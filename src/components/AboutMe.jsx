import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ClipboardJS from 'clipboard';
import '../index.css'; // Ensure the path to your CSS file is correct

const AboutMe = () => {
    useEffect(() => {
        const clipboard = new ClipboardJS('#copyemail');
        clipboard.on('success', (e) => {
            document.getElementById('copyemail').innerText = 'Email Copied';
            setTimeout(() => {
                document.getElementById('copyemail').innerText = 'thomi.delli@gmail.com';
            }, 2000);
        });
        return () => clipboard.destroy();
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
    }, []);

    return (
        <div className="about-me slide delay03">
            <div className="description">
                <p>
                Hi there, I'm Thomas, a 24-year-old multimedia designer from Buenos Aires, Argentina. I specialize in UX and graphic design, with extensive experience in crafting intuitive and engaging interfaces. I excel in developing visual elements using tools such as Photoshop, Figma, and Illustrator.
                </p>
                <Link to="/about" onClick={() => window.scrollTo(0, 0)}>More about me</Link> {/* Link to About page with scroll to top onClick */}
            </div>
            <div className="contact">
                <p>
                    "Get in touch"
                    <span>(Click to copy)</span>
                </p>
                <div className="email" id="copyemail" data-clipboard-text="thomi.delli@gmail.com">thomi.delli@gmail.com</div>
            </div>
        </div>
    );
};

export default AboutMe;

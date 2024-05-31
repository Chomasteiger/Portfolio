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
                Hey there, I'm Thomas, a 24-year-old argentinian junior product designer based in Malaga, Spain. My specialty lies in creating intuitive product interfaces, bridging the gap between business objectives and user needs, and managing complete design projects from start to finish. I'm passionate about taking on diverse challenges in the ever-evolving design world.
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

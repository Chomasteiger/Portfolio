import React from 'react';
import '../index.css';

const Project1 = () => {
    return (
        <div>
            <div className="header slide">
                <a href="/" className="logo">Thomas Delli Antoni</a>
                <a href="/about">About</a>
            </div>

            <div className="work-page slide delay01">
                <div className="work-page-content">
                    <h1>Køkken</h1>
                    <h3 className="text">
                    Coming Soon - 2024</h3>
                </div>
                <div className="back-to-projects">
                    <a href="/">Back to all projects</a>
                </div>
            </div>
            <footer className="slide delay03">@ Thomas Delli Antoni 2024</footer>
        </div>
    );
}

export default Project1;

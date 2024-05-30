import React from 'react';
import '../index.css';
import image1 from '../assets/Project2/Imagen 1.jpg';
import image2 from '../assets/Project2/Imagen 2.jpg';
import image3 from '../assets/Project2/Imagen 3.jpg';
import image5 from '../assets/Project2/Imagen 4.jpg';
import image6 from '../assets/Project2/Imagen 5.jpg';
import image7 from '../assets/Project2/Imagen 7.jpg';


const Project1 = () => {
    return (
        <div>
            <div className="header slide">
                <a href="/" className="logo">Thomas Delli Antoni</a>
                <a href="/about">About</a>
            </div>

            <div className="work-page slide delay01">
                <div className="work-page-content">
                    <h1>Netflix Web Screens</h1>
                    <h3 className="text">
                    In my recent project, I delved deep into mastering the art of designing Netflix web screens. This involved meticulous attention to detail across several critical elements: color, text, grid styles, auto layout, components, and smart animate prototyping. Each of these components played a crucial role in achieving a seamless and visually appealing user interface.</h3>
                    <p>
                    First and foremost, color was pivotal in setting the mood and tone of the screens. Netflix is known for its distinct red and black color scheme, which had to be applied in a way that enhanced user experience while maintaining brand identity. I carefully selected shades and gradients that complemented each other and helped guide users intuitively through the application.
                    </p>
                    <p>
                    Text played a vital role in conveying information concisely and effectively. From the headlines to the smallest labels, every piece of text was meticulously chosen and styled to ensure clarity and readability. This included choosing appropriate fonts, sizes, and weights, as well as implementing text styles that could be easily reused throughout the design.
                    </p>
                    <p>
                    Grid styles were instrumental in creating a sense of structure and consistency across different screens and sections of the application. By setting up a well-defined grid system, I ensured that elements were aligned correctly and that spacing was consistent, which is crucial for creating a visually pleasing and user-friendly interface.
                    </p>
                    <p>
                    Auto layout and components were used to streamline the design process and maintain consistency across multiple screens. By utilizing auto layout features, I could easily adjust the layout and spacing of elements, ensuring that they resized correctly for different screen sizes. Components were used to create reusable design elements, such as buttons and cards, which helped to maintain consistency and speed up the design process.
                    </p>
                    <p>
                    Finally, smart animate prototyping brought the screens to life by creating smooth transitions and interactions between different states of the application. This not only enhanced the user experience but also allowed stakeholders to visualize how the final product would look and feel.
                    </p>
                    <p>
                    In conclusion, mastering these elements—color, text, grid styles, auto layout, components, and smart animate prototyping—was essential in creating Netflix web screens that were not only aesthetically pleasing but also intuitive and user-friendly. By focusing on these details, I was able to deliver a design that met both the functional requirements and the high standards expected from a global platform like Netflix.
                    </p>

                </div>
                <img src={image1} className="work-page-image" alt="Work Page" />
                <img src={image2} className="work-page-image" alt="Work Page" />
                <img src={image7} className="work-page-image" alt="Work Page" />
                <img src={image3} className="work-page-image" alt="Work Page" />
                <img src={image5} className="work-page-image" alt="Work Page" />
                <img src={image6} className="work-page-image" alt="Work Page" />
                

                <div className="back-to-projects">
                    <a href="/">Back to all projects</a>
                </div>
            </div>
            <footer className="slide delay03">@ Thomas Delli Antoni 2024</footer>
        </div>
    );
}

export default Project1;

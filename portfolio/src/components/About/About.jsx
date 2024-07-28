import React from 'react';
import './About.css'
import image from '../../assets/image.jpg'
const About = () => {
    return (
        <div className='about'>
            <div className='about-title'>
                <h1>About me</h1>
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={image} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Hello! I'm <span className='gradient'>Sanjeev Kumar,</span> a passionate and dedicated tech enthusiast with a strong foundation in computer science and software development. I recently graduated from [Your University] with a degree in [Your Degree, e.g., Computer Science], where I developed a solid understanding of various programming languages and technologies.</p>
                        <p><span className='gradient heading'>Education</span><br />I earned my degree in [Your Degree] from [Your University] in [Year of Graduation]. During my time at university, I completed courses in software engineering, web development, data structures, and algorithms. I also earned certifications in [Any Relevant Certifications, e.g., Full-Stack Web Development, Data Science].</p>
                        <p><span className='gradient heading'>Personal Interest</span><br />I earned my degree in [Your Degree] from [Your University] in [Year of Graduation]. During my time at university, I completed courses in software engineering, web development, data structures, and algorithms. I also earned certifications in [Any Relevant Certifications, e.g., Full-Stack Web Development, Data Science].</p>
                       
                    </div>
                </div>
            </div>

        </div>
    );
}

export default About;

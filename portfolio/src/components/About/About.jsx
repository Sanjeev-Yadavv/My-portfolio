import React from 'react';
import './About.css'
import image from '../../assets/image.jpg'
const About = () => {
    return (
        <div id='about' className='about'>
            <div className='about-title'>
                <h1>About me</h1>
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={image} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Hello! I'm <span className='gradient'>Sanjeev Kumar,</span> a passionate and dedicated tech enthusiast with a strong
                            foundation in computer science and software development. I am currently doing Full Stack Web Developer Course from Masai School,
                            where I developed a solid understanding of various programming languages and technologies.</p>
                        <p><span className='gradient heading'>Education</span><br />I graduated with a Bachelor of Commerce (B.Com) from MJP Rohilkhand University,
                            Bareilly in 2022, where I built a strong foundation in business and financial management.
                            Following this, I completed my Bachelor of Education (B.Ed) from the same university in 2024, enhancing my skills in critical thinking,
                            organization, and communication. Currently, I am pursuing a web development course at Masai School, which I started in January 2024.
                            This course is equipping me with essential web technologies and coding skills, allowing me to transition into the tech field
                            and blend my business and educational background with modern web development practices. </p>
                        <p><span className='gradient heading'>Personal Interest</span><br />With a background in commerce,
                            I bring a unique perspective to web development, blending technical skills with a strong understanding of business
                            processes. I am passionate about creating user-friendly and efficient websites that meet both user needs and business goals.
                            In my free time, I enjoy exploring the latest web technologies, contributing to open-source projects,
                            and staying updated with industry trends. I am also an avid learner, always eager to expand my knowledge and tackle new
                            challenges in the ever-evolving field of web development..</p>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default About;

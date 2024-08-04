import React from 'react'
import './Hero.css'
import image from '../../assets/image.jpg'
const Hero = () => {
    return (
        <div className='hero'>
            <img src={image} alt="" />
            <h1><span>I am Samjeev Kumar,</span> Frontend Developer.</h1>
            <p>I create dynamic and user-friendly web interfaces, combining my business background with
                technical skills from Masai School..</p>
            <div className="hero-action">
                <div className="hero-connect">Connect with me</div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    )
}

export default Hero

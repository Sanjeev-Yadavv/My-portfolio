import React from 'react'
import './Hero.css'
import image from '../../assets/image.jpg'
const Hero = () => {
    return (
        <div className='hero'>
            <img src={image} alt="" />
            <h1><span>I am Samjeev Kumar,</span> Frontend Developer.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum perferendis officia eos ipsam rem rerum,
               aperiam beatae libero officiis fugiat.</p>
               <div className="hero-action">
                <div className="hero-connect">Connect with me</div>
                <div className="hero-resume">My Resume</div>
               </div>
        </div>
    )
}

export default Hero

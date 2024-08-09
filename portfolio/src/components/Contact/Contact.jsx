import React from 'react';
import './Contact.css'
import email from '../../assets/email.png'
import phone from '../../assets/phone.png'
import linkedIn from '../../assets/linkedIn.png'
import github from '../../assets/github.png'

const Contact = () => {
  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Contact me</h1>
      </div>
      <div className="contact-box">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <div className="contact-items"><img src={email} alt="" /><h4>kumarsanjeev.sk575@gmail.com</h4></div>
          <div className="contact-items"><img src={phone} alt="" /><h4>+919389701742</h4></div>
          <div className="contact-items"><img src={linkedIn} alt="" /><a href="https://www.linkedin.com/in/sanjeevkumarr123/" target='_blank'>Click to go linkedin profile</a></div>
          <div className="contact-items"><img src={github} alt="" /><a href="https://github.com/Sanjeev-Yadavv" target='_blank'>Click to go github profile</a></div>
        </div>
        <div className="contact-right">
          <label htmlFor="">Your Name</label><br />
          <input type="text" placeholder='Enter your name here'/><br />
          <label htmlFor="">Your Email</label><br />
          <input type="email" placeholder='Enter your email here' /><br />
          <label htmlFor="">Enter your messege</label><br />
          <textarea name="" id="" placeholder='Enter your messege here'></textarea>
          <button id='button'>Submit</button>
        </div>
      </div>

    </div>
  );
}

export default Contact;

import React from 'react';
import './Contact.css';
import email from '../../assets/email.png';
import phone from '../../assets/phone.png';
import linkedIn from '../../assets/linkedIn.png';
import github from '../../assets/github.png';
import { useToast } from '@chakra-ui/react';

const Contact = () => {
  const toast = useToast();

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a501fbf5-998a-49c5-a8ff-d373158c40c5");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      // toast({
      //   title: "Email sent successfully.",
      //   description: "We have received your message.",
      //   status: "success",
      //   duration: 5000,
      //   isClosable: true,
      //   position: "bottom-right",
    
      // });
      alert('Email sent Successfully')
    } else {
      // toast({
      //   title: "An error occurred.",
      //   description: "Unable to send email. Please try again later.",
      //   status: "error",
      //   duration: 5000,
      //   isClosable: true,
      //   position: "bottom-right",
      // });
      alert('error in sending email')
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Contact me</h1>
      </div>
      <div className="contact-box">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <div className="contact-items">
            <img src={email} alt="" />
            <h4>kumarsanjeev.sk575@gmail.com</h4>
          </div>
          <div className="contact-items">
            <img src={phone} alt="" />
            <h4>+919389701742</h4>
          </div>
          <div className="contact-items">
            <img src={linkedIn} alt="" />
            <a href="https://www.linkedin.com/in/sanjeevkumarr123/" target='_blank' rel="noreferrer">
              Click to go linkedin profile
            </a>
          </div>
          <div className="contact-items">
            <img src={github} alt="" />
            <a href="https://github.com/Sanjeev-Yadavv" target='_blank' rel="noreferrer">
              Click to go github profile
            </a>
          </div>
        </div>
        <div className="contact-right">
          <form onSubmit={onSubmit} className='contact-right'>
            <label htmlFor="">Your Name</label><br />
            <input type="text" name='name' placeholder='Enter your name here'/><br />
            <label htmlFor="">Your Email</label><br />
            <input type="email" name='email' placeholder='Enter your email here' /><br />
            <label htmlFor="">Enter your message</label><br />
            <textarea name="textArea" id="" placeholder='Enter your message here'></textarea>
           
           <button id='button'>Submit</button>
          
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;




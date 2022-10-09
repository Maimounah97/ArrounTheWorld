import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import "aos/dist/aos.css";
import './Contact.css';
import backk from '../assets/backk.jpg';
import LoginNav from '../components/LoginNav'

const Contact = () => {
  const form = useRef();
  const [successMsg , setSuccessMsg] = useState(false)
  const [dark , setDark] = useState(true)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ymx3qeq', 'template_2bjkvv8', form.current, '0BaCCCqR3jRE21Pdj')
      .then((result) => {
          setSuccessMsg(true)
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  AOS.init({ duration:2000 });

  return (
    <>
      {/* <div className="container" >
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Subject</label>
            <input type="text" name="user_subject" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
      </div> */}

<LoginNav dark={dark} setDark={setDark} />

<img className="contactImageBack" src={backk} alt="" />
    <div className="contactForm">
    <div className="mt-5">
    <div className="text-start">

<div className='container pt-5 col-4 '>
        <div  className= {dark ? "contactBorderDark" : "contactBorderLight"}>
        <h3 className="text-center text-warning" >Contact With Us</h3>
        {successMsg !== false ? <p className='alert alert-success'> you have been submit your message succasfully</p> : '' }
        <form ref={form}  onSubmit={sendEmail}>
        <div className="row">
            <div className="col">
                <p className="text-light">
                    Name:
                    
                    <input
                        type="text" name="user_name" 
                        className="form-control"
                    />
                </p>
                <p className="text-light">
                    Email:
                    <input
                        type="email" 
                        name="user_email"
                        className="form-control"
                    />
                </p>

                <p className="text-light">
                    Subject:
                    <input
                       type="text" 
                       name="user_subject"
                        className="form-control"
                    />
                </p>

                <p className="text-light">
                      Message:
                    <textarea
                        type="text" 
                        name="message"
                        className="form-control"
                    />
                </p>

                
            </div>
            
        </div>
        
        <input valu='Send' type="submit"
        className="btn btn-light rounded-pill" />
        </form>
        </div>
    </div>

    </div>
    </div>
    </div>

</>
    // <form ref={form} onSubmit={sendEmail}>
    //   <label>Name</label>
    //   <input type="text" name="user_name" />
    //   <label>Email</label>
    //   <input type="email" name="user_email" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form>


    




  );
};

export  default Contact;
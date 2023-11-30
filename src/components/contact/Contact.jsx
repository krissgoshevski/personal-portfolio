import React from 'react'
import './contact.css';
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";

import { useRef } from 'react';
import emailjs from 'emailjs-com';






const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1i2lian', 'template_60n1owj', form.current, 'UU5_pokMUt2ECfdeT')
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
            }, (error) => {
                console.log(error.text);
                alert('Error sending message. Please try again later.');
            });

        e.target.reset();
    };


    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>krissgoshevski@yahoo.com</h5>
                        <a href="mailto:krisgoshevski@gmail.com" target='_blank'>Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <RiMessengerLine className='contact__option-icon' />
                        <h4>Messenger</h4>
                        <a href="https://m.me/gosevski10/" target='_blank'>Send a message </a>
                    </article>
                    <article className='contact__option'>
                        <FaWhatsapp className='contact__option-icon' />
                        <h4>WhatsApp</h4>
                        <h5>+389 70 233 959</h5>
                        <a href="https://api.whatsapp.com/send?phone=+38970233959" target='_blank'>Send a message</a>
                    </article>


                </div>
                {/**END OF CONTACT OPTIONS */}

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Enter your Full Name...' required />
                    <input type="email" name='email' placeholder='Enter your Email...' />
                    <textarea name="message" id="" cols="30" rows="7" placeholder='Enter your message...' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
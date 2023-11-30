

// About.jsx
import React from 'react';
import './about.css';
import ME from '../../assets/mygraduation.jpeg';
import { FaAward } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { FcOpenedFolder } from "react-icons/fc";
import { BsFillFolderSymlinkFill } from "react-icons/bs";
import { IoFolderOutline } from "react-icons/io5";







const About = () => {
    return (
        <section id='about'>

            <h5>Get to know</h5>
            <h2>About me</h2>


            <div className='container about__container'>
                <div className='about__me'>
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            < FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>2+ Years working</small>
                        </article>
                        <article className='about__card'>
                            < ImUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>20+ Worldwide</small>
                        </article>
                        <article className='about__card'>
                            < IoFolderOutline className='about__icon' />
                            <h5>Projects</h5>
                            <small>30+ Completed</small>
                        </article>
                    </div>

                    <p className='p__about-me'>
                        I am 24 years old, a proud graduate of the University of Goce Delchev in Stip, Macedonia. With a four-year degree in Computer Science and Engineering, I embarked on my professional journey as a freelancer. My expertise lies in PHP and Laravel development, crafting web applications and websites.
                        I have contributed to diverse projects, employing PHP alongside the Laravel framework, and utilizing databases such as MySQL and MSSQL for backend development. On the frontend, I'm well-versed in HTML, CSS, Bootstrap, JavaScript, jQuery, and ReactJs.
                        While some of my creations are showcased in my portfolio below, please note that client projects, prioritizing security, are not publicly available. Additionally, I served as a Software Developer at Axapta Masters, where I played a pivotal role in the Microsoft Dynamics 365 system, leveraging x++ and C# languages with an MSSQL database.
                        My responsibilities encompassed SSRS Reports, CRUD Operations, Jobs, BatchJobs, API calls, RESTAPI, and more.
                        With an unwavering commitment to success, I am dedicated to continuous growth.
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's talk</a>

                </div>
            </div>
        </section >
    );
}

export default About;

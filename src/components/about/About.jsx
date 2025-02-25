

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
                            <small>3+ Years working</small>
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
I am a 25-year-old graduate of the University of Goce Delchev in Stip, Macedonia, with a Bachelor's degree in Computer Science and Engineering. My professional journey began as a freelancer, where I honed my expertise in PHP and Laravel development, crafting dynamic web applications and websites.
Throughout my career, I have worked extensively with the Laravel framework, utilizing it alongside databases such as MySQL, PostgreSQL, and MSSQL for backend development. On the frontend, I am proficient in HTML, CSS, Bootstrap, JavaScript, jQuery, and ReactJs, enabling me to create well-rounded and responsive user interfaces.
In addition to client projects, which are kept private for security reasons, I have contributed to several open-source initiatives and have an online portfolio showcasing my work. I also served as a Software Developer at Axapta Masters, where I played a key role in the development and optimization of the Microsoft Dynamics 365 system. In this role, I worked with x++ and C#, leveraging MSSQL databases for complex tasks such as SSRS Reports, CRUD operations, Jobs, BatchJobs, and API integrations using REST API.
Currently, I hold the position of Software Engineer at Neotel, where I work on server and application management, utilizing Nginx and Apache for efficient web server configuration and optimization. I also manage backend applications developed with PHP and Laravel, and handle Linux OS environments, ensuring seamless deployment and operation of services.
Recently, I've expanded my skill set to include advanced Laravel concepts such as Queues with Horizon and Supervisor using Redis, creating both static and dynamic queries, as well as PostgreSQL stored procedures, triggers, transactions and more. This knowledge allows me to create highly efficient and scalable applications capable of handling complex, real-time processes.
My commitment to continuous learning drives me to stay at the forefront of technology, always seeking new challenges and opportunities to enhance my development skills.
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's talk</a>

                </div>
            </div>
        </section >
    );
}

export default About;

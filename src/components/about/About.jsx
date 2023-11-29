

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
                            <small>30+ Worldwide</small>
                        </article>
                        <article className='about__card'>
                            < IoFolderOutline className='about__icon' />
                            <h5>Projects</h5>
                            <small>40+ Completed</small>
                        </article>
                    </div>

                    <p>
                        Description about me fsdklfs d flskd jfsdlk jfsdlk jfsdl kfsd lfksd lfksd flsdj flskd fsd
                        fl sdjf lsdkf lsdkfsd flsdj fsd
                        lfjsd lfkd f
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's talk</a>

                </div>
            </div>
        </section>
    );
}

export default About;

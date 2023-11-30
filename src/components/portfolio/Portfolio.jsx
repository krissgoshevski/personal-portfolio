
import React from 'react'
import './portfolio.css';

import { FaReact, FaLaravel, FaJs, FaPhp, FaHtml5, FaCss3, FaBootstrap, FaDatabase } from 'react-icons/fa';
import { SiMysql } from "react-icons/si";
import { SiJquery } from "react-icons/si";

import IMG1 from '../../assets/portfolio-images/IMG1.jpeg'
import IMG2 from '../../assets/portfolio-images/IMG2.png'
import IMG3 from '../../assets/portfolio-images/IMG3.png'
import IMG4 from '../../assets/portfolio-images/IMG4.png'
import IMG5 from '../../assets/portfolio-images/IMG5.png'
import IMG6 from '../../assets/portfolio-images/IMG6.png'
import IMG7 from '../../assets/portfolio-images/IMG7.jpeg'
import IMG8 from '../../assets/portfolio-images/IMG8.png'
import IMG9 from '../../assets/portfolio-images/IMG9.jpg'
import IMG10 from '../../assets/portfolio-images/laravel-portfolio.png'
import IMG11 from '../../assets/portfolio-images/IMG11.png'
import IMG12 from '../../assets/portfolio-images/IMG12.jpeg'
import IMG13 from '../../assets/portfolio-images/IMG13.jpeg'
import IMG14 from '../../assets/portfolio-images/IMG14.png'
import IMG15 from '../../assets/portfolio-images/IMG15.png'




const data = [
    {
        id: 1,
        image: IMG1,
        title: 'App with Sanctum packet for Auth using API with Laravel',
        github: 'https://github.com/krissgoshevski/API-Sanctum-packet-Laravel',
        // demo: 'demo',
        skills: [<FaHtml5 />, <FaLaravel />, <SiMysql />],
    },
    {
        id: 2,
        image: IMG2,
        title: 'App with CRUD Operations using API with Laravel, Ajax with jQuery',
        github: 'https://github.com/krissgoshevski/API-AJAX-CRUD-LARAVEL',
        // demo: 'demo',
        skills: [<FaHtml5 />, <SiJquery />, <FaJs />, <FaLaravel />, <SiMysql />],
    },
    {
        id: 3,
        image: IMG3,
        title: 'App with Admin-Panel/Dashboard using Laravel',
        github: 'https://github.com/krissgoshevski/Admin-Panel-Dashboard-in-Laravel',
        // demo: 'demo',
        skills: [<FaHtml5 />, <FaCss3 />, <FaBootstrap />, <FaJs />, <SiJquery />, <FaLaravel />, <SiMysql />],
    },
    {
        id: 4,
        image: IMG4,
        title: 'Application with cards using Laravel framework',
        github: 'https://github.com/krissgoshevski/Application-with-cards-using-Laravel',
        // demo: 'demo',
        skills: [<FaHtml5 />, <FaLaravel />, <SiMysql />],
    },
    {
        id: 5,
        image: IMG5,
        title: 'Application where users have additionally skills with Laravel',
        github: 'https://github.com/krissgoshevski/Users-with-additinally-skills',
        // demo: 'demo',
        skills: [<FaHtml5 />, <SiJquery />, <FaJs />, <FaLaravel />, <SiMysql />],
    },
    {
        id: 6,
        image: IMG6,
        title: 'App with RESTAPI using commands and cronJobs',
        github: 'https://github.com/krissgoshevski/Apps-with-RESTAPI-Commands-CronJobs-using-Laravel',
        // demo: '',
        skills: [<FaHtml5 />, <FaJs />, <FaLaravel />, <SiMysql />],
    },
    {
        id: 7,
        image: IMG7,
        title: 'App with API for Students and Instructors using Laravel',
        github: 'https://github.com/krissgoshevski/App-with-API-for-Students-Instructors-using-Laravel',
        // demo: 'demo',
        skills: [<FaHtml5 />, <FaLaravel />, <SiMysql />],
    },
    {
        id: 8,
        image: IMG8,
        title: 'Application where Users can rent movies using Laravel',
        github: 'https://github.com/krissgoshevski/Users-rent-movies---Laravel',
        // demo: 'demo',
        skills: [<FaHtml5 />, <FaCss3 />, <FaJs />, <FaLaravel />, <SiMysql />],
    },
    {
        id: 9,
        image: IMG9,
        title: 'Project - managing companies and employees in Laravel',
        github: 'https://github.com/krissgoshevski/-Project-for-managing-companies-and-the-employees-working-in-each-one-with-Laravel',
        // demo: 'demo',
        skills: [<FaHtml5 />, <FaLaravel />, <SiMysql />],
    },
    {
        id: 10,
        image: IMG10,
        title: 'Movie Application with Eloquent ORM using Laravel ',
        github: 'https://github.com/krissgoshevski/Movie-App-Eloquent-Laravel',
        // demo: 'demo',
        skills: [<FaHtml5 />, <FaCss3 />, <SiJquery />, <FaJs />, <FaLaravel />, <SiMysql />],

    },
    {
        id: 11,
        image: IMG11,
        title: 'Custom Requests, Sessions, Cookies examples',
        github: 'https://github.com/krissgoshevski/Requests-Sessions-Cookies-in-Laravel',
        // demo: 'demo',
        skills: [<FaHtml5 />, <FaJs />, <FaLaravel />, <SiMysql />],

    },
    {
        id: 12,
        image: IMG12,
        title: 'Application for adding Products using OOP with PHP',
        github: 'https://github.com/krissgoshevski/Adding-Products-using-OOP',
        // demo: 'demo',
        skills: [<FaHtml5 />, <FaCss3 />, <SiJquery />, <FaJs />, <FaPhp />, <SiMysql />],

    },
    {
        id: 13,
        image: IMG13,
        title: 'Application for adding Cars using OOP with PHP',
        github: 'https://github.com/krissgoshevski/Adding-cars-pt3-',
        // demo: 'demo',
        skills: [<FaHtml5 />, <FaCss3 />, <FaJs />, <FaPhp />, <SiMysql />],

    },
    {
        id: 14,
        image: IMG14,
        title: 'Website for Cosmetics Studio using PHP main language',
        github: 'https://github.com/krissgoshevski/Cosmetics-studio-Stefi-Kris',
        // demo: 'demo',
        skills: [<FaHtml5 />, <FaCss3 />, <FaBootstrap />, <FaJs />, <FaPhp />, <SiMysql />],

    },
    {
        id: 15,
        image: IMG15,
        title: 'Website - Building Materials using WordPress',
        github: 'https://github.com/krissgoshevski/building-materials',
        // demo: 'demo',
        skills: [<FaHtml5 />, <FaCss3 />, <FaJs />, <FaPhp />, <FaDatabase />],

    },


];

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio__container'>
                {data.map(({ id, image, title, github, skills }) => (
                    <article key={id} className='portfolio__item'>
                        <div className='portfolio__item-image'>
                            <img src={image} alt={title} />
                        </div>
                        <h3>{title}</h3>
                        <div className='portfolio__item-cta'>
                            <a href={github} className='btn' target='_blank'>Github</a>
                            {/* <a href="" className='btn btn-primary' target='_blank'> Live demo </a> */}
                            <div className='portfolio__item-skills'>
                                <h2>{skills}</h2>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;

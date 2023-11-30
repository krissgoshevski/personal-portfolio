import React from 'react'
import './services.css';
import { FaCheck } from "react-icons/fa6";



const Services = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className='container services__container'>
                <article className='service'>
                    <div className='service__head'>
                        <h3>FrontEnd Development</h3>
                    </div>

                    <ul className='service__list'>
                        <li><FaCheck className='service__list-icon' />
                            <p>UI/UX Design</p>
                        </li>
                        <li><FaCheck className='service__list-icon' />
                            <p>Responsive Web Design</p>
                        </li>
                        <li><FaCheck className='service__list-icon' />
                            <p>HTML5 Markup</p>
                        </li>
                        <li><FaCheck className='service__list-icon' />
                            <p>CSS3 Styling</p>
                        </li>
                        <li><FaCheck className='service__list-icon' />
                            <p>Bootstrap Integration</p>
                        </li>
                        <li><FaCheck className='service__list-icon' />
                            <p>JavaScript Development</p>
                        </li>
                        <li><FaCheck className='service__list-icon' />
                            <p>jQuery Integration</p>
                        </li>
                        <li><FaCheck className='service__list-icon' />
                            <p>ReactJS Development</p>
                        </li>
                        <li><FaCheck className='service__list-icon' />
                            <p>Web Analytics Integration</p>
                        </li>
                        <li><FaCheck className='service__list-icon' />
                            <p>Testing and Debugging</p>
                        </li>
                    </ul>
                </article>
                {/*END OF UI UX DESIGN */}

                <article className='service'>
                    <div className='service__head'>
                        <h3>Content</h3>
                    </div>

                    <ul className='service__list'>
                        <li><FaCheck className='service__list-icon' />
                            <p>
                                Custom web application development
                            </p>
                        </li>

                        <li><FaCheck className='service__list-icon' />
                            <p>Full-stack PHP development </p>
                        </li>
                        <li><FaCheck className='service__list-icon' />
                            <p>
                                Integration of databases like MySQL-SQL
                            </p>
                        </li>
                        <li><FaCheck className='service__list-icon' />
                            <p>
                                Responsive web design with HTML-CSS
                            </p>
                        </li>
                        <li><FaCheck className='service__list-icon' />
                            <p>
                                DOM manipulation and event handling
                            </p>
                        </li>
                        <li><FaCheck className='service__list-icon' />
                            <p>
                                Integration of jQuery library
                            </p>
                        </li>
                        <li><FaCheck className='service__list-icon' />
                            <p>
                                Integration of React components
                            </p>
                        </li>

                        <li><FaCheck className='service__list-icon' />
                            <p>
                                Handling of JSON and XML data formats
                            </p>
                        </li>
                        <li><FaCheck className='service__list-icon' />
                            <p>
                                Parsing data in JSON and XML formats
                            </p>
                        </li>
                        <li><FaCheck className='service__list-icon' />
                            <p>
                                Data transfer with encryption-decryption
                            </p>
                        </li>
                        <li><FaCheck className='service__list-icon' />
                            <p>
                                Optimizing code and clear solutions
                            </p>
                        </li>
                        <li><FaCheck className='service__list-icon' />
                            <p>
                                Using of Git for commands
                            </p>
                        </li>
                        <li><FaCheck className='service__list-icon' />
                            <p>
                                Ongoing support, bug fixes, and updates
                            </p>
                        </li>
                        <li><FaCheck className='service__list-icon' />
                            <p>
                                Unit testing and integration testing
                            </p>
                        </li>
                    </ul>
                </article>
                {/**END OF web development  */}

                <article className='service'>
                    <div className='service__head'>
                        <h3>Backend Development</h3>
                    </div>

                    <ul className='service__list'>
                        <li><FaCheck className='service__list-icon' />
                            <p>Building apps and APIs using Laravel </p>
                        </li>
                        <li><FaCheck className='service__list-icon' />
                            <p>Building backend systems using PHP</p>
                        </li>
                        <li><FaCheck className='service__list-icon' />
                            <p>Building backend systems using C#</p>
                        </li>
                        <li><FaCheck className='service__list-icon' />
                            <p>Developing apps and APIs using Python</p>
                        </li>
                        <li><FaCheck className='service__list-icon' />
                            <p>Implementing custom workflows, entities</p>
                        </li>
                        <li><FaCheck className='service__list-icon' />
                            <p>Implementing custom business logic</p>
                        </li>

                        <li><FaCheck className='service__list-icon' />
                            <p>Implementing database schema, tables</p>
                        </li>
                        <li><FaCheck className='service__list-icon' />
                            <p>Implementing relations between tables</p>
                        </li>
                        <li><FaCheck className='service__list-icon' />
                            <p>Optimizing sql queries and querybuilder </p>
                        </li>
                        <li><FaCheck className='service__list-icon' />
                            <p>Implementing secure user authentication </p>
                        </li>
                        <li><FaCheck className='service__list-icon' />
                            <p>Implementing secure user authorization </p>
                        </li>


                    </ul>
                </article>
                {/**end of content creation */}

            </div>

        </section>
    )
}

export default Services
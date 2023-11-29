import React from 'react'
import './experience.css';
import { IoCheckmarkCircleOutline } from "react-icons/io5";


const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2> My Experience</h2>

            <div className='container experience__container'>
                <div className='experience__frontend'>
                    <h3>Frontend Development</h3>
                    <div className="experience__content">

                        <article className='experience__details'>
                            < IoCheckmarkCircleOutline className='experience__details-icon' />
                            <div>
                                <h4>HTML 5</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            < IoCheckmarkCircleOutline />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            < IoCheckmarkCircleOutline className='experience__details-icon' />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            < IoCheckmarkCircleOutline className='experience__details-icon' />
                            <div>
                                <h4>Blade template</h4>
                                <small className='text-light'>Experienced</small>

                            </div>
                        </article>

                        <article className='experience__details'>
                            < IoCheckmarkCircleOutline className='experience__details-icon' />
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            < IoCheckmarkCircleOutline className='experience__details-icon' />
                            <div>
                                <h4>jQuery</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            < IoCheckmarkCircleOutline className='experience__details-icon' />
                            <div>
                                <h4>React Js</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
                {/**END OF FRONTEND */}

                <div class="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            < IoCheckmarkCircleOutline className='experience__details-icon' />
                            <div>
                                <h4>PHP</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            < IoCheckmarkCircleOutline className='experience__details-icon' />
                            <div>
                                <h4>Laravel</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            < IoCheckmarkCircleOutline className='experience__details-icon' />
                            <div>
                                <h4>C#</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            < IoCheckmarkCircleOutline className='experience__details-icon' />
                            <div>
                                <h4>X++</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            < IoCheckmarkCircleOutline className='experience__details-icon' />
                            <div>
                                <h4>Python</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            < IoCheckmarkCircleOutline className='experience__details-icon' />
                            <div>
                                <h4>Flask</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            < IoCheckmarkCircleOutline className='experience__details-icon' />
                            <div>
                                <h4>MySQL </h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            < IoCheckmarkCircleOutline className='experience__details-icon' />
                            <div>
                                <h4>MSSQL </h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            < IoCheckmarkCircleOutline className='experience__details-icon' />
                            <div>
                                <h4>SSRS Reports </h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Experience
import React from 'react'
import './testimonials.css';
import Avt1 from '../../assets/sano.jpeg';
import Avt2 from '../../assets/marko.jpeg';
import Avt3 from '../../assets/emil.jpeg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';


const data = [
    {
        avatar: Avt1,
        name: 'Aleksandro Milenkov',
        review: 'This is my friend, and he is a FullStack Developer who works at Allocate company. Every time he shares various insights about programming concepts within FullStack Development.',



    },
    {
        avatar: Avt2,
        name: 'Marko Jovanov',
        review: 'This is my friend Marko, who works as an iOS Developer at Netcetera company.'

    },
    {
        avatar: Avt3,
        name: 'Emill Gjorgiev',
        review: 'This is my colleague from our university. He works as a Shopify Developer on platforms like Fiverr and Upwork for clients. We have collaborated on a project using the Laravel framework.'

    }
];

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from Colleagues</h5>
            <h2>Testimonials</h2>
            <Swiper className='container testimonials__container'
                pagination={{
                    type: 'progressbar',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
            >
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className='testimonials'>
                                <div className='client__avatar'>
                                    <img src={avatar} alt={name} />
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials

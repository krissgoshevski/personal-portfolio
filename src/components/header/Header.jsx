import React from 'react'
import './header.css';
import CTA from './CTA';
import ME from '../../assets/P5rvM3KCdQZBJMnoeF70B-transformed.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h3>Hello I'm</h3>
                <h1>Kristijan Goshevski</h1>
                <h4 className='text-light'>FullStack Developer</h4>
                <CTA />
                <HeaderSocials />

                <div className='me'>
                    <img src={ME} alt="me" />
                </div>

                <a href="#contact" className='scroll_down'>Scroll down</a>
            </div>

        </header>
    )
}

export default Header
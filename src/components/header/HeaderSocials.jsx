import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { VscGithub } from "react-icons/vsc";



const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/kristijan-goshevski-856a35239/" target='__blank'><BsLinkedin />
            </a>
            <a href="https://github.com/krissgoshevski" target='__blank'><VscGithub /></a>
            {/* <a href="https://dribble.com" target='__blank'></a> */}


        </div>
    )
}

export default HeaderSocials
import React from 'react'
import MyCV from '../../assets/mkd_CV_Kristijan_Goshevski.pdf'




const CTA = () => {
    return (
        <div className="cta">
            <a href={MyCV} download={MyCV} className='btn'>Download CV</a>
            <a href="#contact" className='btn btn-primary' id="talk">Let's Talk</a>
        </div>
    )
}

export default CTA

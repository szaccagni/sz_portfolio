import './Contact.css'
import { useEffect } from 'react'

export default function Info({setActiveLink}) {
    useEffect(function() {
        setActiveLink('contact')
    })

    return (
        <div className='contact-container'>
            <div className='contact-abs-container'>
                <div className='contact-link'>
                    <a href='https://github.com/szaccagni' target="_blank" rel="noreferrer">GitHub <span style={{fontFamily: 'Bootstrap-icons'}}>&#xF144;</span></a>
                </div>
                <div className='contact-link'>
                    <a href='https://www.linkedin.com/in/szaccagni/' target="_blank" rel="noreferrer">LinkedIn <span style={{fontFamily: 'Bootstrap-icons'}}>&#xF144;</span></a>
                </div>
                <div className='contact-link'>
                    <a href='mailto:sarahzaccagni@gmail.com?subject=Inquiry%20from%20Portfolio%20Site' target="_blank" rel="noreferrer">Email <span style={{fontFamily: 'Bootstrap-icons'}}>&#xF144;</span></a>
                </div>
                {/* <div className='contact-email' id='contact-email'>sarahzaccagni@gmail.com</div> */}
            </div>
        </div>
    )
}
import './Contact.css'
import { useEffect } from 'react'
import resume from '../../assets/resume.pdf'

export default function Info({setActiveLink}) {
    useEffect(function() {
        setActiveLink('contact')
    },[])

    return (
        <div className='contact-container'>
            <div className='contact-abs-container'>
                <div className='contact-link'>
                    <a href='https://github.com/szaccagni' target="_blank">GitHub <span style={{fontFamily: 'Bootstrap-icons'}}>&#xF144;</span></a>
                </div>
                <div className='contact-link'>
                    <a href='https://www.linkedin.com/in/szaccagni/' target="_blank">LinkedIn <span style={{fontFamily: 'Bootstrap-icons'}}>&#xF144;</span></a>
                </div>
                <div className='contact-link'>
                    <a href='mailto:sarahzaccagni@gmail.com?subject=Inquiry%20from%20Portfolio%20Site' target="_blank">Email <span style={{fontFamily: 'Bootstrap-icons'}}>&#xF144;</span></a>
                </div>
                {/* <div className='contact-email' id='contact-email'>sarahzaccagni@gmail.com</div> */}
            </div>
        </div>
    )
}
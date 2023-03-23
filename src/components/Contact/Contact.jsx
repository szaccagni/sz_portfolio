import './Contact.css'
import { useEffect } from 'react'

export default function Info({setActiveLink}) {
    useEffect(function() {
        setActiveLink('contact')
    },[])

    return (
        <div className='contact-container'>
            <div className='contact-abs-container'>
                <div className='contact-link'>
                    <a href='https://github.com/szaccagni' target="_blank">GitHub <span style={{fontFamily: 'arimo-regular'}}>&#8599;</span></a>
                </div>
                <div className='contact-link'>
                    <a href='https://www.linkedin.com/in/szaccagni/' target="_blank">LinkedIn <span style={{fontFamily: 'arimo-regular'}}>&#8599;</span></a>
                </div>
                <div className='contact-email' id='contact-email'>sarahzaccagni@gmail.com</div>
            </div>
        </div>
    )
}
import './Contact.css'
import { useEffect } from 'react'

export default function Info({setActiveLink}) {
    const arrowAway = <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/></svg>

    useEffect(function() {
        setActiveLink('contact')
    },[])

    return (
        <div className='contact-container'>
            <div className='contact-abs-container'>
                <div className='contact-link'>
                    <a href='https://github.com/szaccagni' target="_blank">GitHub {arrowAway}</a>
                </div>
                <div className='contact-link'>
                    <a href='https://www.linkedin.com/in/szaccagni/' target="_blank">LinkedIn {arrowAway}</a>
                </div>
                <div className='contact-email' id='contact-email'>sarahzaccagni@gmail.com</div>
            </div>
        </div>
    )
}
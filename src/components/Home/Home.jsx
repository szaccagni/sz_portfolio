import './Home.css'
import { useState, useEffect } from 'react'
import image1 from '../../assets/me3.jpg'
import resume from '../../assets/resume.pdf'
import meEdit1 from '../../assets/me-edit1.jpg'
import meEdit2 from '../../assets/me-edit2.jpg'
import meEdit3 from '../../assets/me-edit3.png'

export default function Home({setActiveLink}) {
    useEffect(function() {
        setActiveLink('home')
    },[])

    return (
        <div className='home-abs-container'>
            <div className='home-btm-container'>
                <div className='home-text-small width-90'>
                Sarah is an innovative, solutions-driven Full Stack Developer dedicated to crafting clean, efficient, and maintainable code. Her previous experience as an Officer on Interaudi Bank’s projects and innovation team has honed her project management skills as well as her ability to approach challenges with creativity and a positive attitude. She excels at solving complex problems and is eager to continue to learn and develop her skills in her next position.
                </div>
                <div className='tech-icon-container'>
                    <div className='tech-icon'>
                        <div><i className="devicon-javascript-plain"></i></div>
                        <div className='home-text-small'>JAVASCRIPT</div>
                    </div>
                    <div className='tech-icon'>
                        <div><i className="devicon-react-original"></i></div>
                        <div className='home-text-small'>REACT</div>
                    </div>
                    <div className='tech-icon'>
                        <div><i className="devicon-nodejs-plain"></i></div>
                        <div className='home-text-small'>NODEJS</div>
                    </div>
                    <div className='tech-icon'>
                        <div><i className="devicon-express-original"></i></div>
                        <div className='home-text-small'>EXPRESS</div>
                    </div>
                    <div className='tech-icon'>
                        <div><i className="devicon-mongodb-plain"></i></div>
                        <div className='home-text-small'>MONGODB</div>
                    </div>
                    <div className='tech-icon'>
                        <div><i className="devicon-python-plain"></i></div>
                        <div className='home-text-small'>PYTHON</div>
                    </div>
                    <div className='tech-icon'>
                        <div><i className="devicon-django-plain"></i></div>
                        <div className='home-text-small'>DJANGO</div>
                    </div>
                    <div className='tech-icon'>
                        <div><i className="devicon-postgresql-plain"></i></div>
                        <div className='home-text-small'>POSTGRESQL</div>
                    </div>
                    <div className='tech-icon'>
                        <div><i className="devicon-git-plain"></i></div>
                        <div className='home-text-small'>GIT</div>
                    </div>
                </div>  
                <div className='contact-link resume-link'>
                    <a href={resume} target="_blank">resume <span style={{fontFamily: 'Bootstrap-icons'}}>&#xF144;</span></a>
                </div>
                <div className='home-bottom-container'>
                    <div className='home-text' id='homePgTitle'>
                        <div>full</div> &nbsp;
                        <div>stack</div> &nbsp;
                        <div>developer</div>
                    </div>
                    <div className='home-img-container'>
                    <img src={meEdit3} alt='me'></img> 
                    </div>
                </div>
            </div>
        </div>       
    )
}
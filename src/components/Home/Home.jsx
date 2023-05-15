import './Home.css'
import { useState, useEffect } from 'react'
import image1 from '../../assets/me3.jpg'
import resume from '../../assets/resume.pdf'

export default function Home({setActiveLink, setShowNav}) {
    const [hoverScroll, setHoverScroll] = useState(false)
    
    useEffect( () => {
       setActiveLink('home')
       window.addEventListener('resize', listenToScroll)
       return () => {
         window.removeEventListener('resize', listenToScroll);
       };
    }, [])

    function listenToScroll() {
        const heightToHide = document.getElementById('navBar').getBoundingClientRect().bottom
        const titleTop = document.getElementById('homePgTitle').getBoundingClientRect().top
        if (titleTop < (heightToHide+20)) {
            setShowNav('fade-out')
        }
        if (titleTop > (heightToHide+20)) {
            setShowNav('fade-in')
        }
    }

    return (
        <div className='home-container'>
            <div className= {hoverScroll ? 'photo-booth-container photo-booth-scroll' : 'photo-booth-container'} onMouseEnter={() => setHoverScroll(true)} onMouseLeave={() => setHoverScroll(false)} onScroll={listenToScroll}>
                <div className='photo-booth'>
                    <img src={image1} alt='me'></img> 
                    {/* <img src={image2} alt='mef'></img> */}
                    <div className='home-text' id='homePgTitle'>
                        <div>full</div> &nbsp;
                        <div>stack</div> &nbsp;
                        <div>developer</div>
                    </div>
                    <div className='home-text-small width-90'>
                    Sarah is an innovative, solutions-driven Full Stack Developer dedicated to writing efficient code to produce a seamless UX design as well as an intuitive backend system. Her previous experience as an Officer on Interaudi Bank’s projects and innovation team has honed her project management skills as well as her ability to anticipate end user needs. She is excited to tackle problems both big and small and continue to learn and develop her skills in her next position.
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
                    <div className='contact-link'>
                        <a href={resume} target="_blank">resume <span style={{fontFamily: 'Bootstrap-icons'}}>&#xF144;</span></a>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
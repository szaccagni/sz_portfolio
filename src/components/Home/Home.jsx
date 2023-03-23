import './Home.css'
import { useState, useEffect } from 'react'
import image1 from '../../assets/me3.jpg'
import image2 from '../../assets/me4.JPG' 

export default function Home({setActiveLink}) {
    const [hoverScroll, setHoverScroll] = useState(false)
    
    useEffect( function() {
       setActiveLink('home')
    }, [])

    function handleScroll(e) {
        console.log(e.target.scrollTop)
    }

    return (
        <div className='home-container'>
            <div className= {hoverScroll ? 'photo-booth-container photo-booth-scroll' : 'photo-booth-container'} onMouseEnter={() => setHoverScroll(true)} onMouseLeave={() => setHoverScroll(false)} onScroll={handleScroll}>
                <div className='photo-booth'>
                    <img src={image1} alt='me'></img> 
                    {/* <img src={image2} alt='mef'></img> */}
                    <div className='home-text'>
                        <div>full</div> &nbsp;
                        <div>stack</div> &nbsp;
                        <div>developer</div>
                    </div>
                    <div className='home-text-small'>
                    Sarah is an innovative, solutions-driven Full Stack Developer dedicated to writing efficient code to produce a seamless UX design as well as an intuitive backend system. Her previous experience as an Officer on Interaudi Bank’s projects and innovation team has honed her project management skills as well as her ability to anticipate end user needs. She is excited to tackle problems both big and small and continue to learn and develop her skills in her next position.
                    </div>
                    <div className='tech-icon-container'>
                        <div className='tech-icon'>
                            <div><i class="devicon-javascript-plain"></i></div>
                            <div className='home-text-small'>JAVASCRIPT</div>
                        </div>
                        <div className='tech-icon'>
                            <div><i class="devicon-react-original"></i></div>
                            <div className='home-text-small'>REACT</div>
                        </div>
                        <div className='tech-icon'>
                            <div><i class="devicon-nodejs-plain"></i></div>
                            <div className='home-text-small'>NODEJS</div>
                        </div>
                        <div className='tech-icon'>
                            <div><i class="devicon-express-original"></i></div>
                            <div className='home-text-small'>EXPRESS</div>
                        </div>
                        <div className='tech-icon'>
                            <div><i class="devicon-mongodb-plain"></i></div>
                            <div className='home-text-small'>MONGODB</div>
                        </div>
                        <div className='tech-icon'>
                            <div><i class="devicon-python-plain"></i></div>
                            <div className='home-text-small'>PYTHON</div>
                        </div>
                        <div className='tech-icon'>
                            <div><i class="devicon-django-plain"></i></div>
                            <div className='home-text-small'>DJANGO</div>
                        </div>
                        <div className='tech-icon'>
                            <div><i class="devicon-postgresql-plain"></i></div>
                            <div className='home-text-small'>POSTGRESQL</div>
                        </div>
                        <div className='tech-icon'>
                            <div><i class="devicon-git-plain"></i></div>
                            <div className='home-text-small'>GIT</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
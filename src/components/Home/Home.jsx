import './Home.css'
import image1 from '../../assets/me3.jpg'
import image2 from '../../assets/me4.JPG' 
import { useState, useEffect } from 'react'

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
                        Sarah is an innovative, solutions-driven Full Stack Developer dedicated to writing efficient code to produce a seamless UX design as well as an intuitive backend system. Her previous experience as an Officer on Interaudi Bank’s projects and innovation team has honed her project management skills as well as her ability to anticipate end user needs. She is excited to tackle problems both big and small and continue to learn and develop my skills in her next position.
                    </div>
                </div>
            </div>
        </div>
    )
}
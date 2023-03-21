import './Home.css'
import image1 from '../../assets/me3.jpg'
import image2 from '../../assets/me4.JPG' 
import { useEffect } from 'react'

export default function Home({setActiveLink}) {
    
    useEffect( function() {
       setActiveLink('home')
    }, [])

    return (
        <div className='home-container'>
            <div className='photo-booth-container'>
                <div className='photo-booth'>
                    <img src={image1} alt='me'></img> 
                    <img src={image2} alt='mef'></img>
                </div>
            </div>
            <div className='home-text'><div>full</div> &nbsp;<div>stack</div> &nbsp;<div>developer</div></div>
        </div>
    )
}
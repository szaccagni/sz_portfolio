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
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam corporis quam molestias! Assumenda, neque fugiat. Laborum architecto eligendi praesentium quaerat aliquid, consequatur quis, adipisci doloremque asperiores qui reprehenderit atque dicta.
                    </div>
                </div>
            </div>
        </div>
    )
}
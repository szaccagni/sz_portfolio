import './Home.css'
import image1 from '../../assets/me3.jpg'
import image2 from '../../assets/me4.JPG' 

export default function Home() {
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
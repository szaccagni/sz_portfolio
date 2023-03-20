import './Home.css'

export default function Home() {
    return (
        <div className='home-container'>
            <div className='photo-booth-container'>
                <div className='photo-booth'>
                    <img src='me-3.jpg'></img> 
                    <img src='me-4.JPG'></img>
                </div>
            </div>
            <div className='home-text'><div>full</div> &nbsp;<div>stack</div> &nbsp;<div>developer</div></div>
        </div>
    )
}
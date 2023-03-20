import './NavBar.css'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div className='nav-bar'>
            <div className='nav-bar-title'><div>SARAH</div> &nbsp;<div>ZACCAGNI</div></div>
            <div class='nav-link'><Link to='/home'>HOME</Link></div>
            <div class='nav-link'><Link to='/projects'>PROJECTS</Link></div>
            <div class='nav-link'><Link to='/info'>INFO</Link></div>
            <div class='nav-link'><Link to='/contact'>CONTACT</Link></div>
        </div>
    )
}
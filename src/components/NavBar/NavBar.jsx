import './NavBar.css'
import { Link } from 'react-router-dom'

export default function NavBar({activeLink, showNav}) {
    const activeStyle = {
        textDecoration: 'line-through',
    }

    return (
        <div className={`nav-bar ${showNav}`} id='navBar'>
            <div className='nav-bar-title'><div>SARAH</div> &nbsp;<div>ZACCAGNI</div></div>
            <div className='nav-link'>
                <Link to='/' 
                    style={ activeLink === 'home' ? activeStyle : {}}>HOME</Link>
            </div>
            <div className='nav-link'>
                <Link to='/projects' style={ activeLink === 'projects' ? activeStyle : {}}>PROJECTS</Link>
            </div>
            <div className='nav-link'>
                <Link to='/contact' style={ activeLink === 'contact' ? activeStyle : {}}>CONTACT</Link>
            </div>
        </div>
    )
}
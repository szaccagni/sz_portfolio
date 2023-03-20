import './NavBar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function NavBar() {
    const [activeLink, setActiveLink] = useState('')

    const activeStyle = {
        textDecoration: 'line-through',
    }

    return (
        <div className='nav-bar'>
            <div className='nav-bar-title'><div>SARAH</div> &nbsp;<div>ZACCAGNI</div></div>
            <div class='nav-link'>
                <Link to='/home' 
                    style={ activeLink === 'home' ? activeStyle : {}}
                    onClick={ () => setActiveLink('home')}>HOME</Link>
            </div>
            <div class='nav-link'>
                <Link to='/projects' style={ activeLink === 'projects' ? activeStyle : {}}
                onClick={ () => setActiveLink('projects')}>PROJECTS</Link>
            </div>
            <div class='nav-link'>
                <Link to='/contact' style={ activeLink === 'contact' ? activeStyle : {}}
                onClick={ () => setActiveLink('contact')}>CONTACT</Link>
            </div>
        </div>
    )
}
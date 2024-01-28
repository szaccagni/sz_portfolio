import './Projects.css'
import { useEffect } from 'react'

export default function Projects({setActiveLink}) {
    useEffect(function() {
        setActiveLink('projects')
    })

    return (
        <div className='project-container'>
            <div className='project-abs-container'>
                <div className='project-link'>
                    <a href='https://art-collector.herokuapp.com/' target="_blank" rel="noreferrer">art collector <span style={{fontFamily: 'Bootstrap-icons'}}>&#xF144;</span></a>
                </div>
                <div className='project-link'>
                    <a href='https://trip-planner-sz-1212.herokuapp.com/' target="_blank" rel="noreferrer"><div>trip</div>&nbsp;<div>planner</div><span style={{fontFamily: 'Bootstrap-icons'}}>&#xF144;</span></a>
                </div>
            </div>
        </div>
    )
}
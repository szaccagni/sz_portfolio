import './Projects.css'
import { useEffect } from 'react'

export default function Projects({setActiveLink}) {
    useEffect(function() {
        setActiveLink('projects')
    },[])

    return (
        <div className='project-container'>
            <div className='project-abs-container'>
                <div className='project-link'>
                    <a href='https://trip-planner-sz-1212.herokuapp.com/' target="_blank"><div>trip</div>&nbsp;<div>planner</div><span style={{fontFamily: 'arimo-regular'}}>&#8599;</span></a>
                </div>
                <div className='project-link'>
                    <a href='https://szaccagni.github.io/battle_ship/' target="_blank">battleship <span style={{fontFamily: 'arimo-regular'}}>&#8599;</span></a>
                </div>
            </div>
        </div>
    )
}
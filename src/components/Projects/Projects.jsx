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
                    <a href='https://san-fran-curb-cuisine.vercel.app/' target="_blank"><div>curb</div>&nbsp;<div>cuisine</div><span style={{fontFamily: 'Bootstrap-icons'}}>&#xF144;</span></a>
                </div>
                <div className='project-link'>
                    <a href='https://carbon-footprint-calc.vercel.app/' target="_blank">carbon footprint quiz<span style={{fontFamily: 'Bootstrap-icons'}}>&#xF144;</span></a>
                </div>
                <div className='project-link'>
                    <a href='https://art-collector.herokuapp.com/' target="_blank">art collector <span style={{fontFamily: 'Bootstrap-icons'}}>&#xF144;</span></a>
                </div>
                <div className='project-link'>
                    <a href='https://trip-planner-sz-1212.herokuapp.com/' target="_blank"><div>trip</div>&nbsp;<div>planner</div><span style={{fontFamily: 'Bootstrap-icons'}}>&#xF144;</span></a>
                </div>
            </div>
        </div>
    )
}
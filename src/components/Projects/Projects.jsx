import './Projects.css'

export default function Projects() {
    const arrowAway = <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/></svg>

    return (
        <div className='project-container'>
            <div className='project-abs-container'>
                <div className='project-link'>
                    <a href='https://trip-planner-sz-1212.herokuapp.com/' target="_blank"><div>trip</div>&nbsp;<div>planner</div> {arrowAway}</a>
                </div>
                <div className='project-link'>
                    <a href='https://szaccagni.github.io/battle_ship/' target="_blank">battleship {arrowAway}</a>
                </div>
            </div>
        </div>
    )
}
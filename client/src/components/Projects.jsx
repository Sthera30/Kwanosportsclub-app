import React, { useEffect } from 'react'
import { FaUtensilSpoon } from 'react-icons/fa'
import { BuildingIcon, CircleDotIcon, SchoolIcon, TrophyIcon, MicIcon, ShareIcon } from 'lucide-react'
import Img4 from '../assets/IMG-20241118-WA0058.jpg'
import img5 from '../assets/IMG-20241120-WA0017.jpg'
import img6 from '../assets/IMG-20241118-WA0059.jpg'
import img7 from '../assets/IMG-20241121-WA0015.jpg'
import '../css/projects.css'

function Projects() {


    useEffect(() => {

        window.scrollTo(0, 0)

    }, [])

    return (
        <>

            <div className='project-burner-container-'>

                <div className='project-burner-containers'>


                </div>


            </div>

            <div className='projects-heading'>

                <h1>PROJECTS</h1>

            </div>

            <div className='projects-container'>

                <div className='projects-box'>

                    <h3><BuildingIcon className='build' style={{ color: 'blue' }} /> &nbsp;&nbsp; Infrastructure</h3>
                    <div className='build'>
                        <CircleDotIcon style={{ color: 'green' }} /> <p>Building quality and secure sports infrastructure for communities in need</p>

                    </div>
                    <ul>

                        <li>Build community tennis courts</li>
                        <li>Collaborate with schools in underdeveloped South African communities</li>
                        <li>Create multipurpose sport centres where learners can play freely in a safe environment</li>

                    </ul>

                </div>

                <div className='projects-box'>

                    <h3><SchoolIcon style={{ color: 'green' }} /> &nbsp;&nbsp;School sports</h3>
                    <p><TrophyIcon style={{ color: 'rgb(148, 108, 5)' }} /> &nbsp;&nbsp;It is our goal to build interest and revive schools sports</p>
                    <ul>

                        <li>We draw up annual programs for schools to follow through the year and have school sports be a yearly investment instead of seasonally.</li>
                        <li>Working with the schools and having the support of the community we believe it is possible to achieve this feat.</li>
                        <li>Ours is to ensure the deserving children who are active in sport get a fair opportunity to get proper training and development from a young age.</li>
                        <li>This would contribute to South Africa bagging more medals at Olympics and African games in the near future as development is the cornerstone of success of such events. </li>

                    </ul>

                </div>

                <div className='projects-box'>

                    <h3><MicIcon style={{ color: 'purple' }} /> &nbsp;&nbsp;Media Training</h3>

                    <div className='build'>

                        <MicIcon style={{ color: 'purple' }} />
                        <p>Preparing young players for international media interactions and building communication skills</p>

                    </div>

                    <ul>

                        <li>Conduct after game interviews with young players</li>
                        <li>Equip players with media handling skills from a young age</li>
                        <li>Promote players on social media platforms</li>
                        <li>Create opportunities for audience growth and sponsor exposure </li>

                    </ul>

                </div>


            </div>

            <div className='vlog-pics-container'>


                <div className='vlog-pics'>

                    <img src={Img4} alt="" />

                </div>

                <div className='vlog-pics'>

                    <img src={img5} alt="" />

                </div>

                <div className='vlog-pics'>

                    <img src={img6} alt="" />

                </div>


                <div className='vlog-pics'>

                    <img src={img7} alt="" />

                </div>


            </div>

        </>
    )
}

export default Projects

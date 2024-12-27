import React, { useEffect } from 'react'
import '../css/communityBuilding.css'
import { User2Icon, Users2Icon, CheckCircle2Icon } from 'lucide-react'
import Review from '../components/Review.jsx'

function CommunityBuilding() {


  useEffect(() => {

    window.scrollTo(0, 0)

  }, [])


  return (
    <>

      <div className='community-buidling-burner'>

        <div className='community-buidling-inner'>


        </div>

      </div>



      <div className='community-building-container'>

        <div className='community-building-box'>

          <User2Icon style={{ color: 'blue' }} />

          <h2>Individual Sessions</h2>
          <ul>

            <li>Suitable for anyone interested in playing tennis, whether socially or at a high level</li>
            <li>Available to anyone in Uitenhage, not limited to Kwanobuhle residents</li>
            <li>Focus on improving both strengths and weaknesses of players</li>
            <li>Can provide a partner to match your skill level or maintain fitness</li>
            <li>Sessions can be purely for playing and fitness rather than formal coaching</li>
            <li>Players seeking training partners can contact anytime.</li>

          </ul>


        </div>

        <div className='community-building-box'>

          <Users2Icon style={{ color: 'green' }} />

          <h2>Group Sessions</h2>
          <ul>

            <li>Family annd friends are welcome</li>
            <li>Schools can arrange group sessions for learners</li>
            <li>Group sessions may come with discounts, including for schools</li>
            <li>Open to anyone interested in learning or playing as a group</li>

          </ul>


        </div>

      </div>

      <div className='community-heading'>

        <h2>Private Training Lessons</h2>
        <p>Mobile tennis club - We prioritize early development of young children aged between 6-13, while keeping our services accessible to all</p>

      </div>


      <div className='level-container'>

        <div className='level-inner-container'>

          <h3>All Levels Welcome</h3>

          <div className='begginers'>

            <CheckCircle2Icon style={{ color: 'blue' }} />
            <span style={{ color: 'blue' }}>Beginners</span>

          </div>

          <div className='intermediate'>

            <CheckCircle2Icon style={{ color: 'green' }} />
            <span style={{ color: 'green' }}>Intermediate</span>

          </div>

          <div className='professional'>

            <CheckCircle2Icon style={{ color: 'purple' }} />
            <span style={{ color: 'purple' }}>Professional</span>

          </div>

        </div>

      </div>

      <Review />


      <div className='bottom-footer'>

        <div className='bottom-footer-inner'>

          <h2>Ready To Improve Your Game?</h2>
          <p>To book us for your school, personal or group session, please fill out the contact form below.</p>

        </div>

      </div>

    </>
  )
}

export default CommunityBuilding

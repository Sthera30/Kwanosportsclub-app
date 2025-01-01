import React, { useEffect, useState } from 'react'
import '../css/about.css'
import { FaRocket, FaEye } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { BuildingIcon, CircleDotIcon, SchoolIcon, TrophyIcon } from 'lucide-react'
import axios from 'axios'
import { useUserContext } from '../context/userContext'
import toast from 'react-hot-toast'

function About() {


  const [id, setId] = useState("")
  const [mission, setMission] = useState("")
  const [about, setAbout] = useState("")
  const [values, setValues] = useState([])

  const { user } = useUserContext()

  async function handle_fetch_values() {

    try {

      const res = await axios.get("https://kwanosportsclub-backend-app.onrender.com/getAllValues")

      if (res.data.success) {
        setValues(res.data.data.values)
      }


      else {
        toast.error(res.data.error)
      }

    } catch (error) {
      console.log(error);

    }

  }



  async function handle_fetch_about() {

    try {

      const res = await axios.get('https://kwanosportsclub-backend-app.onrender.com/getAllAboutUs')

      if (res.data.success) {
        setAbout(res.data.data.about)
      }

      else {
        toast.error(res.data.error)
      }

    } catch (error) {
      console.log(error);
    }

  }


  async function handle_fetch_vision() {

    try {

      const res = await axios.get('https://kwanosportsclub-backend-app.onrender.com/getAllVision')

      if (res.data.success) {
        setId(res.data.data.vision)
      }

      else {
        toast.error(res.data.error)
      }

    } catch (error) {
      console.log(error);
    }

  }


  async function handle_fetch_mission() {

    try {

      const res = await axios.get('https://kwanosportsclub-backend-app.onrender.com/getAllMission')

      if (res.data.success) {
        setMission(res.data.data.mision);

      }

      else {
        toast.error(res.data.error)
      }

    } catch (error) {
      console.log(error);
    }

  }

  async function handle_remove_values(id) {

    try {

      const res = await axios.delete(`https://kwanosportsclub-backend-app.onrender.com/removeValues?id=${id}`)

      if (res.data.success) {
        toast.success(res.data.message)
        handle_fetch_values()
      }

      else {
        toast.error(res.data.error)
      }

    } catch (error) {
      console.log(error);

    }

  }



  useEffect(() => {

    window.scrollTo(0, 0)
    handle_fetch_about()
    handle_fetch_vision()
    handle_fetch_mission()
    handle_fetch_values()

  }, [])




  return (
    <>

      <div className='about-container'>


        <h3>{about[0]?.aboutTitle}</h3>


      </div>


      <div className='about-content'>

        <p>{about[0]?.aboutDescription}</p>

        <div className='button-container'>


          {user?.role === 'admin' ? (

            <NavLink to={`/edit-about/${about[0]?._id}`} className='btnEdit'>Edit</NavLink>

          ) : ("")}

        </div>

      </div>

      <div className='about-burner'>

        <div className='about-burner-inner'>

          <h2>OUR MISSION & VISION</h2>

        </div>

      </div>

      <div className='our-mission-vision-container'>

        <div className='our-mission-vision-box'>

          <h2><FaRocket style={{ color: 'orange', fontSize: '2rem' }} />&nbsp;{mission[0]?.missionTitle}</h2>
          <p>{mission[0]?.missionDescription}</p>

          <div className='button-container'>

            {user?.role === "admin" ? (
              <NavLink to={`/edit-mission/${mission[0]?._id}`} className='btnEdit'>Edit</NavLink>

            ) : ("")}

          </div>

        </div>

        <div className='our-mission-vision-box'>

          <h2><FaEye className='eye' style={{ color: 'green' }} />&nbsp;{id[0]?.visionTitle}</h2>
          <p>{id[0]?.visionDescription}</p>
          <div className='button-container'>

            {user?.role === 'admin' ? (
              <NavLink to={`/edit-vision/${id[0]?._id}`} className='btnEdit'>Edit</NavLink>

            ) : ("")}
          </div>

        </div>

      </div>


      <div className='our-values-burner'>

        <div className='our-values-inner'>

          <h1>OUR VALUES</h1>

        </div>

      </div>

      <div className='our-values-container'>


        {values.map((value) => (

          <div className='our-values-box'>

            <span>{value.valuesIcon}</span>
            <h3>{value.valuesTitle}</h3>
            <p>{value.valuesDescription}</p>

            {user?.role === 'admin' ? (
              <div className='button-container'>

                <NavLink to={`/edit-values/${value._id}`} className='btnEdit'>Edit</NavLink>
                <button onClick={() => handle_remove_values(value._id)} className='btnDelete'>Delete</button>
              </div>
            ) : ("")}

          </div>

        ))}

      </div>

      <div className='button-container'>

        <NavLink className={"btnReadMore"} to={"/about-us"}>Read More</NavLink>

      </div>


      <div className='projects-burner-container'>

        <div className='projects-inner-container'>


        </div>

      </div>


      <div className='project-heading'>

        <h1>PROJECTS</h1>

      </div>


      <div className='projects-container'>

        <div className='projects-box'>

          <h3><BuildingIcon style={{ color: 'blue' }} /> &nbsp;&nbsp; Infrastructure</h3>
          <p><CircleDotIcon className='building' style={{ color: 'green' }} /> &nbsp;&nbsp;Building quality and secure sports infrastructure for communities in need</p>
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


      </div>

      <div className='explore-container'>

        <NavLink className={"btnExplore"} to={"/projects"}>Explore More</NavLink>

      </div>


    </>
  )
}

export default About

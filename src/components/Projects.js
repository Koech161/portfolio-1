import React from 'react'
import NavBar from './NavBar'
import weather from '../assets/weather.jpeg'
import '../style/Projects.css'
const Projects = () => {
  return (
    <div>
        <>
        <NavBar/>
        </>
    
      <div className='projects'>
        <h2>My Projects</h2>
        <div className=' card'>
            <h3>Weather Forecast</h3>
            <img className='mb-5 fluid' src={weather} alt=''/>
            <p>Shows real-time weather forecasts based on location.</p>
            
        </div>

      </div>
    </div>
  )
}

export default Projects

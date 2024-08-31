import React from 'react'
import NavBar from './NavBar'
import weather from '../assets/weather.jpeg'
import todo from '../assets/todo_list.jpeg'
import dashbdoard from '../assets/dashboard.jpeg'
import '../style/Projects.css'

const Projects = () => {
  return (
    <div>
        <>
        <NavBar/>
        </>
    
      <div className='projects'>
        <h2>My Projects</h2>
        <div className='cards'>
        <div className=' card'>
            <h3>Weather Forecast</h3>
            <img className='mb-5 fluid' src={weather} alt='weather forecast'/>
            <h4>Shows real-time weather forecasts based on location.</h4>
            
        </div>
        <div className=' card'>
            <h3>Todo List</h3>
            <img className='mb-5 fluid' src={todo} alt='todo list'/>
            <h4>A to-do list application that persists data using local storage.</h4>
            <h4>Users can add, mark, and remove tasks.</h4>
            
        </div>

        <div className=' card'>
            <h3>Ecomerce admin dashboard</h3>
            <img className='mb-5 fluid' src={dashbdoard} alt='admin dashboard'/>
            <h4>A to-do list application that persists data using local storage.</h4>
            <h4>Users can add, mark, and remove tasks.</h4>
            
        </div>
      </div>
      </div>
    
    </div>
  )
}

export default Projects

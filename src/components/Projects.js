import React from 'react'
import NavBar from './NavBar'
import weather from '../assets/weather.jpeg'
import todo from '../assets/todo_list.jpeg'
import dashbdoard from '../assets/dashboard.jpeg'
import doc from '../assets/Screenshot 2024-09-09 095111.png'
import '../style/Projects.css'

const Projects = () => {
  return (
    <div>
        
        <NavBar/>
        
    
      <div className='projects'>
        <h2>My Projects</h2>
        <div className='cards'>
        <div className=' card p-5'>
            <h3>Doctor appointment</h3>
            <img className='mb-5 fluid card-img-top' src={doc} alt='Todo list'/>
            <h4>A Doctor Appointment application that allows patients to schedule and manage their appointments online.</h4>
<h4>Patients can select a date and time for their appointments, view available slots, and receive confirmation upon booking.</h4>
<h4>The application provides a user-friendly interface to choose from available dates and times, ensuring easy and efficient scheduling.</h4>
            
        </div>
        <div className=' card p-3'>
            <h3>Weather Forecast</h3>
            <img className='mb-5 fluid card-img-top' src={weather} alt='Weather forecast'/>
            <h4>Shows real-time weather forecasts based on location.</h4>
            
        </div>
        <div className=' card'>
            <h3>Todo List</h3>
            <img className='mb-5 fluid card-img-top' src={todo} alt='Todo list'/>
            <h4>A to-do list application that persists data using local storage.</h4>
            <h4>Users can add, mark, and remove tasks.</h4>
            
        </div>

        <div className=' card'>
            <h3>E-commerce admin dashboard</h3>
            <img className='mb-5 fluid card-img-top' src={dashbdoard} alt='E-commerce admin dashboard'/>
            <h4>An admin dashbdoard for mananaging e-commerce operations.</h4>
            <h4>Features include sales analytics, product management and customer administration.</h4>
            
        </div>
      </div>
      </div>
    
    </div>
  )
}

export default Projects

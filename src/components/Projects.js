import React from 'react'
import NavBar from './NavBar'
import weather from '../assets/weather.jpeg'
import todo from '../assets/todo_list.jpeg'
import dashboard from '../assets/dashboard.jpeg'
import doc from '../assets/Screenshot from 2024-09-16 22-10-24.png'
import recipe from '../assets/Screenshot from 2024-09-16 15-39-59.png'
import collection from '../assets/Screenshot from 2024-09-16 21-58-58.png'
import dictionary from '../assets/Screenshot from 2024-09-18 01-24-05.png'
import advice from '../assets/Screenshot from 2024-09-18 01-12-14.png'

const Projects = () => {
  const projects = [
    {
      title: 'Doctor Appointment',
      imgSrc: doc,
      altText: 'Doctor Appointment',
      description: `A Doctor Appointment application that allows patients to schedule and manage their appointments online.
                    Patients can select a date and time for their appointments, view available slots, and receive confirmation upon booking.
                    The application provides a user-friendly interface to choose from available dates and times, ensuring easy and efficient scheduling.`,
      githubLink: 'https://github.com/Koech161/dose-life--doctor-appointment',
      liveLink: 'https://doselife.vercel.app'
    },
    {
      title: 'Weather Forecast',
      imgSrc: weather,
      altText: 'Weather Forecast',
      description: 'Shows real-time weather forecasts based on location.',
      githubLink: 'https://github.com/Koech161/weather-app',
      liveLink: 'https://weather-app-teal-five-95.vercel.app'
    },
    {
      title: 'Recipe Finder',
      imgSrc: recipe,
      altText: 'Recipe Finder',
      description: 'Find recipes by name to discover new dishes you can prepare.',
      githubLink: 'https://github.com/koech161/Kitchen-Chronicles',
      liveLink: 'https://koech161.github.io/Kitchen-Chronicles/'
    },
    {
      title: 'Online Fashion Store',
      imgSrc: collection,
      altText: 'Online Fashion Store',
      description: 'An e-commerce platform for browsing and purchasing fashion items.',
      githubLink: 'https://github.com/Koech161/jb-collections',
      liveLink: 'https://sleekstylish.vercel.app'
    },
    {
      title: 'Todo List',
      imgSrc: todo,
      altText: 'Todo List',
      description: `A to-do list application that persists data using local storage.
                    Users can add, mark, and remove tasks.`,
      githubLink: 'https://github.com/Koech161/Todo-list',
      liveLink: 'https://koech161.github.io/Todo-list/'
    },
    {
      title: 'E-commerce Admin Dashboard',
      imgSrc: dashboard,
      altText: 'E-commerce Admin Dashboard',
      description: `An admin dashboard for managing e-commerce operations.
                    Features include sales analytics, product management, and customer administration.`,
      githubLink: 'https://github.com/Koech161/E-commerce-Dashboard',
      liveLink: 'https://admindasboard.vercel.app'
    
  },
  {
    title: 'Quotes Generator',
    imgSrc: advice,
    altText: 'Quotes Generator',
    description: `Generates random quotes for inspiration and motivation.`,
    githubLink: 'https://github.com/koech161/Advice-App',
    liveLink: 'https://koech161.github.io/Advice-App/'
  },
  {
    title: 'English Dictionary',
    imgSrc: dictionary,
    altText: 'English Dictionary',
    description: `A comprehensive dictionary application for looking up word definitions and meanings.`,
    githubLink: 'https://github.com/koech161/dictionary',
    liveLink: 'https://koech161.github.io/dictionary/'
  }
  ]
  return (
<div>
      <NavBar />
      
      <div className='projects' style={{ marginTop: '100px' }}>
        <div className='container'>
          <h2 className='text-center mb-4'>My Projects</h2>
          <div className='row'>
            {projects.map((project, index) => (
              <div className='col-md-6 col-lg-4 mb-4' key={index}>
                <div className='card p-3'>
                  <img className='card-img-top' src={project.imgSrc} alt={project.altText} />
                  <div className='card-body'>
                    <h3 className='card-title'>{project.title}</h3>
                    <p className='card-text'>{project.description}</p>
                    <div className='d-flex justify-content-between'>
                      <a className='btn btn-primary' href={project.githubLink} target='_blank' rel='noopener noreferrer'>
                        GitHub
                      </a>
                      <a className='btn btn-secondary' href={project.liveLink} target='_blank' rel='noopener noreferrer'>
                        Live
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects

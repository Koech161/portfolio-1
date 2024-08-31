import React from 'react'
import NavBar from './NavBar'
import Skills from './Skills'
import '../style/Projects.css'
import {   FaCogs, FaFileDownload } from 'react-icons/fa'
import resume from '../assets/abel_koech.pdf'

const Resume = () => {
  return (
    <div >
        <NavBar/>
        
        <div className='resume'>
            <h1>My Resume</h1>
        <h3>Discover more about my skills and background by downloading my resume.</h3>
      <button type='primary'>   <FaFileDownload size={24}/><a href={resume} target='_blank' rel='noopener noreferrer' >Download CV</a></button>
        </div>
        <h2 className='title'> <FaCogs size={28}/>  My Skills</h2>
        <Skills/>
      
    </div>
  )
}

export default Resume

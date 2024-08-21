import React from 'react'
import NavBar from './NavBar'
import Skills from './Skills'
import '../style/Projects.css'
import {   FaCogs, FaFileDownload } from 'react-icons/fa'

const Resume = () => {
  return (
    <div >
        <NavBar/>
        
        <div className='resume'>
            <h1>My Resume</h1>
        <h3>Discover more about my skills and background by downloading my resume.</h3>
      <button type='primary'>   <FaFileDownload size={24}/><a href='https://docs.google.com/document/d/1i6FfZ1cJL0k6BkmwjGJaKLauqkB76VgWRSMvwY5lawQ/edit#heading=h.5rf9wr4r3no2' target='_blank' rel='noopener noreferrer' >Download CV</a></button>
        </div>
        <h2 className='title'> <FaCogs size={28}/>  My Skills</h2>
        <Skills/>
      
    </div>
  )
}

export default Resume

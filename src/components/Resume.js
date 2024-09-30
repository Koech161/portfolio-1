import React from 'react'
import NavBar from './NavBar'
import Skills from './Skills'
import '../style/Projects.css'
import {   FaCogs, FaFileDownload } from 'react-icons/fa'
import resume from '../assets/resume.pdf'

const Resume = () => {
  return (
    <div>
      <NavBar />
      
      <div className='resume' style={{ marginTop: '120px' }}>
        <div className='container'>
          <h1 className='text-center mb-4'>My Resume</h1>
          <h3 className='text-center mb-4'>
            Discover more about my skills and background by downloading my resume.
          </h3>
          <div className='text-center mb-4'>
            <a 
              href={resume} 
              target='_blank' 
              rel='noopener noreferrer' 
              className='btn  btn-light bg-info d-flex align-items-center text-white rounded-pill justify-content-center'
             style={{width:'200px', margin:'0 auto'}}>
              <FaFileDownload size={24} className='me-2' />
              Download CV
            </a>
          </div>
        </div>
        
        <div className='container'>
          <h2 className='title text-center mb-4'>
            <FaCogs size={28} className='me-2' />
            My Skills
          </h2>
          <Skills />
        </div>
      </div>
    </div>
  )
}

export default Resume

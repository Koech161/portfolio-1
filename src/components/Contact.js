import React from 'react'
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import NavBar from './NavBar'


const Contact = () => {
  return (
    <>
   
    <div className='contact' >
        <NavBar />
        <div className='contact-item'>
          <FaLinkedin />
          <p><a href='https://www.linkedin.com/in/yourprofile' target='_blank' rel='noopener noreferrer'>LinkedIn</a></p>
        </div>
        <div className='contact-item'>
          <FaGithub />
          <p><a href='https://github.com/koech161' target='_blank' rel='noopener noreferrer'>GitHub </a></p>
        </div>
      
    </div>
  
    </>
  )
}

export default Contact

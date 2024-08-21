import React from 'react'
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import NavBar from './NavBar'
import '../style/Contact.css'

const Contact = () => {
  return (
    <>
    <NavBar />
    <div className='contact' >
       
        <h2>Contact Me</h2>
        <div className='contact-item'>
          <FaLinkedin  size={24} color="#0077B5" />
          <p><a href='https://www.linkedin.com/in/abel-koech-787193280/' target='_blank' rel='noopener noreferrer'>LinkedIn</a></p>
        </div>
        <div className='contact-item'>
          <FaGithub size={24} color="#333"/>
          <p><a href='https://github.com/koech161' target='_blank' rel='noopener noreferrer'>GitHub </a></p>
        </div>
      
    </div>
  
    </>
  )
}

export default Contact

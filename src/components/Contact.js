import React from 'react'
import { FaEnvelopeOpenText, FaGithub, FaLinkedin} from 'react-icons/fa'
import NavBar from './NavBar'
import '../style/Contact.css'
import contact from '../assets/contact _pic.svg'

const Contact = () => {

  return (
    <div className='contact-container'>
    <NavBar />
    <div className='contact justify-content-center row ' style={{marginTop:'130px'}}>
    <div className='col-md-6'>
      <img className='img-fluid' src= {contact} alt=''/>
    </div>
        <h2>Contact Me</h2>
        <div className='contact-item col-md'>
          <FaLinkedin  size={24} color="#0077B5" />
          <p><a href='https://www.linkedin.com/in/abel-koech-787193280/' target='_blank' rel='noopener noreferrer'>LinkedIn</a></p>
        </div>
        <div className='contact-item'>
          <FaGithub size={24} color="#333"/>
          <p><a href='https://github.com/koech161' target='_blank' rel='noopener noreferrer'>GitHub </a></p>
        </div>
        <div className='contact-item'>
          <FaEnvelopeOpenText size={24} color="#333"/>
          <p><a href='mailto:koechabel161@gmail.com' target='_blank' rel='noopener noreferrer'>Email </a></p>
        </div>
      
      
    </div>
    
  
    </div>
  )
}

export default Contact

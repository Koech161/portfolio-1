import React from 'react'
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='contact-item'>
          <FaPhone />
          <p>(+254) 748512459</p>
        </div>
        <div className='contact-item'>
          <FaMapMarkerAlt/>
          <p> Eldoret, Kenya</p>
        </div>
        <div className='contact-item'>
          <FaLinkedin />
          <p><a href='https://www.linkedin.com/in/yourprofile' target='_blank' rel='noopener noreferrer'>LinkedIn</a></p>
        </div>
        <div className='contact-item'>
          <FaGithub />
          <p><a href='https://github.com/koech161' target='_blank' rel='noopener noreferrer'>GitHub </a></p>
        </div>
    </div>
  )
}

export default Footer

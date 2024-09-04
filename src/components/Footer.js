import React from 'react'
import '../style/Footer.css'
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

const Footer = () => {
  return (
   <footer className='footer'>
    <div className='footer-content'>
      <div className='footer-item'>
          <FaPhone />
          <p> +254 748512459</p>
        </div>
        <div className='footer-item'>
          <FaMapMarkerAlt/>
          <p> Eldoret, Kenya</p>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Kenya.svg/1200px-Flag_of_Kenya.svg.png" alt="Kenyan Flag" class="kenyan-flag"/>
        </div>
        <div className='footer-item'>
          <FaLinkedin   size={24} color="#0077B5"/>
          <p><a href='https://www.linkedin.com/in/abel-koech-787193280/' target='_blank' rel='noopener noreferrer'>LinkedIn</a></p>
        </div>
        <div className='footer-item'>
          <FaGithub size={24} color="#333"/>
          <p><a href='https://github.com/koech161' target='_blank' rel='noopener noreferrer'>GitHub </a></p>
        </div>

    </div>
    <p className='copyrights'>  &copy; 2024 Abel Koech. All rights reserved.</p>
    </footer>
   
    
  )
}

export default Footer

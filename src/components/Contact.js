// import React from 'react'
// import { FaEnvelopeOpenText, FaGithub, FaLinkedin} from 'react-icons/fa'
// import NavBar from './NavBar'
// import '../style/Contact.css'
// import contact from '../assets/contact _pic.svg'

// const Contact = () => {

//   return (
//     <div className='contact-container'>
//     <NavBar />
//     <div className='contact justify-content-center row ' style={{marginTop:'130px'}}>
//     <div className='col-md-6'>
//       <img className='img-fluid' src= {contact} alt=''/>
//     </div>
//         <h2>Contact Me</h2>
//         <div className='contact-item col-md'>
//           <FaLinkedin  size={24} color="#0077B5" />
//           <p><a href='https://www.linkedin.com/in/abel-koech-787193280/' target='_blank' rel='noopener noreferrer'>LinkedIn</a></p>
//         </div>
//         <div className='contact-item'>
//           <FaGithub size={24} color="#333"/>
//           <p><a href='https://github.com/koech161' target='_blank' rel='noopener noreferrer'>GitHub </a></p>
//         </div>
//         <div className='contact-item'>
//           <FaEnvelopeOpenText size={24} color="#333"/>
//           <p><a href='mailto:koechabel161@gmail.com' target='_blank' rel='noopener noreferrer'>Email </a></p>
//         </div>
      
      
//     </div>
    
  
//     </div>
//   )
// }

// export default Contact


import React from 'react'
import { FaEnvelopeOpenText, FaGithub, FaLinkedin } from 'react-icons/fa'
import NavBar from './NavBar'
import '../style/Contact.css'
import contact from '../assets/contact _pic.svg'

const Contact = () => {
  return (
    <div className="contact-container">
      <NavBar />
      <div className="container my-6 row justify-content-center" style={{ marginTop: '130px' }}>
        {/* Image Section */}
        <div className="col-md-6 d-flex justify-content-center align-items-center mb-4">
          <img className="img-fluid" src={contact} alt="Contact illustration" />
        </div>

        {/* Contact Title */}
        <div className="col-12 text-center mb-4">
          <h2>Contact Me</h2>
        </div>

        {/* Contact Items */}
        <div className="col-md-4 d-flex flex-column align-items-center">
          <div className="contact-item mb-3 text-center">
            <FaLinkedin size={40} color="#0077B5" />
            <p className="mt-2">
              <a
                href="https://www.linkedin.com/in/abel-koech-787193280/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                LinkedIn
              </a>
            </p>
          </div>

          <div className="contact-item mb-3 text-center">
            <FaGithub size={40} color="#333" />
            <p className="mt-2">
              <a
                href="https://github.com/koech161"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                GitHub
              </a>
            </p>
          </div>

          <div className="contact-item mb-3 text-center">
            <FaEnvelopeOpenText size={40} color="#333" />
            <p className="mt-2">
              <a
                href="mailto:koechabel161@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                Email
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

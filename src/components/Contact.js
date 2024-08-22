import React, { useState } from 'react'
import { FaEnvelopeOpenText, FaGithub, FaLinkedin} from 'react-icons/fa'
import NavBar from './NavBar'
import '../style/Contact.css'

const Contact = () => {
  const [error, setError] =useState(null)
  const [formData, setFormData] =useState({
    email: '',
    message: ''
  })

  const handleChange = (e) =>{
    const {name, value}= e.target
    setFormData({
      ...formData, 
      [name]: value
    })
   setError(null)
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    const {email ,message} =formData
    if(!email || !message){
      setError('All fields are requiered')
      return
    }
    console.log(formData);
    setFormData({ email: '', message: '' })
  }
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
        <div className='contact-item'>
          <h3><FaEnvelopeOpenText/> Email</h3>
        </div>
        
        <>

        <form action='' method='POST' className='form' onSubmit={handleSubmit} >
            <label>Email</label>
            <input type='email'  placeholder='enter your email' name='email' value={formData.email} onChange={handleChange}/>
            <label>message</label>
            <textarea name='message' placeholder='enter your message' value={formData.message} onChange={handleChange} />
            {error && <div className='error-message'>{error}</div>}
            <input type='submit' />
          </form>
        </>
      
    </div>
  
    </>
  )
}

export default Contact

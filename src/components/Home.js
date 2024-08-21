import React from 'react'

import homeimg from '../assets/my_pic.jpg'
import '../App.css'
import NavBar from './NavBar'
import Footer from './Footer'
const Home = () => {
  return (

    <div>
       <> <NavBar /></>
    <div className='home-container'>
    
        
       
    <div className='about'>
      <div className='bio '>
      <h2>Hello, I'm</h2>
        <h3>Abel Koech</h3>
        <h3> a <span className='span'>Front-end Developer</span></h3>
      </div>
    <div className='home-img mb-3'>
        <img src={homeimg} alt=''/>
    </div>
    </div>
    
    </div>
    {/* <div className='contact-info'>
          <h2>Contact Me</h2>
          <p>If you have any questions or want to get in touch, please email me at:</p>
          <p><a href='mailto:koechabel161@gmail.com>K</a></p>
        </div> */}
        <Footer/>
    </div>
  )
}

export default Home

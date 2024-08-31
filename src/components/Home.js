import React, { useEffect, useState } from 'react'

import homeimg from '../assets/my_pic.jpg'
import '../App.css'
import NavBar from './NavBar'

const Home = () => {

  return (

    <div className='home'>
        <NavBar />
    <div className='home-container'>
    
        
       
    <div className='about'>
      <div className='bio '>
      <h2>Hello, I'm</h2>
        <h3>Abel Koech</h3>
        <h3> a <span className='span'>Front-end Developer</span></h3>
      </div>
    <div className='home-img mb-3'>
        <img src={homeimg} alt='Abel Koech'/>
    </div>
    </div>
    
    </div>
  
        
    </div>
  )
}

export default Home

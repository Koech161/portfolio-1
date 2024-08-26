import React, { useEffect, useState } from 'react'

import homeimg from '../assets/my_pic.jpg'
import '../App.css'
import NavBar from './NavBar'

const Home = () => {
 
const [sentenceIndex, setSentenceIndex] =useState(0)
 const sentences =[
  'Front-end Developer',
  'React Developer'
 ]
  useEffect(()=>{
    const interval = setInterval(() => {
      setSentenceIndex(prev=> (prev + 1) % sentences.length)
    },2500);
   return () =>clearInterval(interval)
  },[])
  return (

    <div className='home'>
        <NavBar />
    <div className='home-container'>
    
        
       
    <div className='about'>
      <div className='bio '>
      <h2>Hello, I'm</h2>
        <h3>Abel Koech</h3>
        <h3> a <span className='span'>{sentences[sentenceIndex]}</span></h3>
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

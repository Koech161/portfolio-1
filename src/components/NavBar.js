import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpeg'
import '../style/Nav.css'
import {   FaEnvelope, FaFileAlt, FaHome } from 'react-icons/fa'
import { FaCode } from 'react-icons/fa6'
const NavBar = () => {
  return (
 
    <header className='header fixed-top' style={{fontFamily:'Abel, sans-serif', backgroundColor: '#e0d3d3'}}>


      <nav className="navbar  ">
      
      <div className='logo navbar-brand '>
       
        <img src={logo} alt='' className='mb-4'/>
        </div>
        <div className="  navbar" id="navbarNav">
        <ul className='list'>
            <li className="nav-item active  text-red"> 
            <Link  className="nav-link" to='/'>
           <FaHome/> Home</Link>
            </li>
          
            <li className="nav-item">
            <Link  className="nav-link" to='/resume'>
           <FaFileAlt/> Resume</Link>
            </li>
            <li className="nav-item">
            <Link  className="nav-link" to='/projects'>
           <FaCode/> Projects</Link>
            </li>
            <li className="nav-item">
            <Link  className="nav-link" to='/contact'>
           <FaEnvelope/> Contact</Link>
            </li>
        </ul>
        </div>
      </nav>
    </header>
  )
}

export default NavBar

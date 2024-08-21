import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpeg'
import '../style/Nav.css'
import {  FaFileAlt, FaHome, FaUserAlt } from 'react-icons/fa'
import { FaCode } from 'react-icons/fa6'
const NavBar = () => {
  return (
    <header className='header'>

<div className='logo'>
        <img src={logo} alt='' className='mb-4'/>
        </div>
      <nav className="navbar  ">
      {/* <a className="navbar-brand" href="#"></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className=" " id="navbarNav">
        <ul className='list'>
            <li className="nav-item active"> 
            <Link  className="nav-link" to='/'>
           <FaHome/> Home</Link>
            </li>
            <li className="nav-item">
            <Link  className="nav-link" to='/about'>
         <FaUserAlt/>   About</Link>
            </li>
            <li className="nav-item">
            <Link  className="nav-link" to='/resume'>
           <FaFileAlt/> Resume</Link>
            </li>
            <li className="nav-item">
            <Link  className="nav-link" to='/projects'>
           <FaCode/> Projects</Link>
            </li>
        </ul>
        </div>
      </nav>
    </header>
  )
}

export default NavBar

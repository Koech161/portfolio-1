import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaEnvelope, FaFileAlt, FaHome } from 'react-icons/fa'
import { FaCode } from 'react-icons/fa6'
import { FaBars, FaTimes } from 'react-icons/fa'

const NavBar = () => {
 
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); 
  const [hoveredIndex, setHoveredIndex] = useState(null); 
  
  
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

 
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Inline styles
  const headerStyle = {
    fontFamily: 'Abel, sans-serif',
    backgroundColor: '#e0d3d3',
    position: 'fixed',
    top: '0',
    width: '100%',
    padding: '10px 0',
    zIndex: '1000',
  };

  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    flexWrap: 'wrap', 
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    letterSpacing: '1px',
  };

  const navLinksStyle = {
    listStyleType: 'none',
    display: 'flex',
    gap: '20px',
    margin: '0',
    padding: '0',
  };

  // Change color when hovered over
  const navItemStyle = (isHovered) => ({
    fontSize: '16px',
    fontWeight: '500',
    color: isHovered ? 'red' : '#333', 
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'color 0.3s ease', 
  });

  const mobileMenuStyle = {
    flexDirection: 'column',
    gap: '20px',
    position: 'absolute',
    top: '50px',
    right: '20px',
    backgroundColor: '#e0d3d3',
    padding: '20px',
    borderRadius: '8px',
    width: '200px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    display: menuOpen ? 'block' : 'none', 
  };

  // Toggle menu on mobile
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header style={headerStyle}>
      <nav style={navbarStyle}>
        <div style={logoStyle}>
          AbeL
        </div>
        {isMobile ? (
          // Hamburger Icon for mobile view
          <div onClick={toggleMenu} style={{ cursor: 'pointer' }}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
        ) : (
          // Desktop view navbar items
          <div>
            <ul style={navLinksStyle}>
              <li
                onMouseEnter={() => setHoveredIndex(0)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={navItemStyle(hoveredIndex === 0)}
              >
                <Link to="/" style={navItemStyle(hoveredIndex === 0)}>
                  <FaHome /> Home
                </Link>
              </li>
              <li
                onMouseEnter={() => setHoveredIndex(1)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={navItemStyle(hoveredIndex === 1)}
              >
                <Link to="/resume" style={navItemStyle(hoveredIndex === 1)}>
                  <FaFileAlt /> Resume
                </Link>
              </li>
              <li
                onMouseEnter={() => setHoveredIndex(2)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={navItemStyle(hoveredIndex === 2)}
              >
                <Link to="/projects" style={navItemStyle(hoveredIndex === 2)}>
                  <FaCode /> Projects
                </Link>
              </li>
              <li
                onMouseEnter={() => setHoveredIndex(3)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={navItemStyle(hoveredIndex === 3)}
              >
                <Link to="/contact" style={navItemStyle(hoveredIndex === 3)}>
                  <FaEnvelope /> Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
      {isMobile && menuOpen && (
        <div style={mobileMenuStyle}>
          <ul style={{ listStyleType: 'none', padding: '0' }}>
            <li
              onMouseEnter={() => setHoveredIndex(0)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={navItemStyle(hoveredIndex === 0)}
            >
              <Link to="/" style={navItemStyle(hoveredIndex === 0)} onClick={toggleMenu}>
                <FaHome /> Home
              </Link>
            </li>
            <li
              onMouseEnter={() => setHoveredIndex(1)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={navItemStyle(hoveredIndex === 1)}
            >
              <Link to="/resume" style={navItemStyle(hoveredIndex === 1)} onClick={toggleMenu}>
                <FaFileAlt /> Resume
              </Link>
            </li>
            <li
              onMouseEnter={() => setHoveredIndex(2)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={navItemStyle(hoveredIndex === 2)}
            >
              <Link to="/projects" style={navItemStyle(hoveredIndex === 2)} onClick={toggleMenu}>
                <FaCode /> Projects
              </Link>
            </li>
            <li
              onMouseEnter={() => setHoveredIndex(3)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={navItemStyle(hoveredIndex === 3)}
            >
              <Link to="/contact" style={navItemStyle(hoveredIndex === 3)} onClick={toggleMenu}>
                <FaEnvelope /> Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;

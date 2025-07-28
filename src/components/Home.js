// import homeimg from '../assets/my_pic.jpg'
// import '../App.css'
// import NavBar from './NavBar'
// import About from './About'
// import { Helmet } from 'react-helmet'
// import Resume from './Resume'
// import Projects from './Projects'
// import Contact from './Contact'

// const Home = () => {

//   return (

//     <div className='home'>
//         <Helmet>
//         <title>Home - Abel Koech</title>
//         <meta name="description" content="Welcome to the portfolio of Abel Koech, a Front-end Developer." />
//         <meta name="keywords" content="Abel Koech, Front-end Developer, Web Developer, Portfolio" />
//         <meta name="author" content="Abel Koech" />
//         <meta name="copyright" content="© 2024 Abel Koech" />
//         <link rel="canonical" href="https://abelkoech.vercel.app/" />
//       </Helmet>
//         <NavBar />
//         <div className='container my-6 row text-center justify-content-center' style={{marginTop:'150px'}}>
//           <div className='col-md-6'>
//           <h2>Hello, I'm</h2>
//         <h3>Abel Koech</h3>
//         <h3> A <span className='span'>Full Stack Developer</span></h3>
//       </div>
//       <div className='col-md-6'>
//       <img className='img-fluid  img ' src={homeimg} alt=' Potrait of Abel Koech' />
//       </div>
        
//         </div>
//     <About/>
//     <Resume />
//     <Projects />
//     <Contact />    
//     </div>
//   )
// }

// export default Home


import React, {useEffect} from 'react'
import homeimg from '../assets/my_pic.jpg'
import '../App.css'
import NavBar from './NavBar'
import About from './About'
import { Helmet } from 'react-helmet'
import Resume from './Resume'
import Projects from './Projects'
import Contact from './Contact'

const Home = () => {

  const newWebsite = 'https://abelk-k.vercel.app'
  useEffect(() => {
    window.location.href = newWebsite
  },[])

  return (
    <div className="home">
      <Helmet>
  <title>Abel Koech - Full Stack Developer Portfolio</title>
  <meta name="description" content="Explore the portfolio of Abel Koech, a skilled Full Stack Developer specializing in modern web development technologies. View projects, resume, and contact information." />
  <meta name="keywords" content="Abel Koech, Full Stack Developer, Web Developer, React Developer, Portfolio, JavaScript, Next.js, Frontend, Backend" />
  <meta name="author" content="Abel Koech" />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="Abel Koech - Full Stack Developer Portfolio" />
  <meta property="og:description" content="Discover the work of Abel Koech, a Full Stack Developer proficient in React, Next.js, and Django. Check out projects and get in touch." />
  <meta property="og:image" content="https://abelkoech.vercel.app/assets/my_pic.jpg" />
  <meta property="og:url" content="https://abelkoech.vercel.app/" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Abel Koech - Full Stack Developer Portfolio" />
  <meta name="twitter:description" content="Browse through Abel Koech’s portfolio showcasing modern web development projects and expertise." />
  <meta name="twitter:image" content="https://abelkoech.vercel.app/assets/my_pic.jpg" />
  <link rel="canonical" href="https://abelkoech.vercel.app/" />
</Helmet>


      {/* Navbar */}
      <NavBar />

      {/* Hero Section */}
      <div className="container my-6 row text-center justify-content-center" style={{ marginTop: '100px' }}>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h2>Hello, I'm</h2>
          <h3>Abel Koech</h3>
          <h3>
            A <span className="text-danger">Full Stack Developer</span>
          </h3>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img className="img-fluid rounded" src={homeimg} alt="Portrait of Abel Koech" />
        </div>
      </div>

      {/* About Section */}
      <About />

      {/* Resume Section */}
      <Resume />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />
    </div>
  )
}

export default Home

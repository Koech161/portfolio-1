import homeimg from '../assets/my_pic.jpg'
import '../App.css'
import NavBar from './NavBar'
import About from './About'
import { Helmet } from 'react-helmet'
import Resume from './Resume'
import Projects from './Projects'
import Contact from './Contact'

const Home = () => {

  return (

    <div className='home'>
        <Helmet>
        <title>Home - Abel Koech</title>
        <meta name="description" content="Welcome to the portfolio of Abel Koech, a Front-end Developer." />
        <meta name="keywords" content="Abel Koech, Front-end Developer, Web Developer, Portfolio" />
        <meta name="author" content="Abel Koech" />
        <meta name="copyright" content="© 2024 Abel Koech" />
        <link rel="canonical" href="https://abelkoech.vercel.app/" />
      </Helmet>
        <NavBar />
        <div className='container my-6 row text-center justify-content-center' style={{marginTop:'150px'}}>
          <div className='col-md-6'>
          <h2>Hello, I'm</h2>
        <h3>Abel Koech</h3>
        <h3> A <span className='span'>Full Stack Developer</span></h3>
      </div>
      <div className='col-md-6'>
      <img className='img-fluid  img ' src={homeimg} alt=' Potrait of Abel Koech' />
      </div>
        
        </div>
    <About/>
    <Resume />
    <Projects />
    <Contact />    
    </div>
  )
}

export default Home

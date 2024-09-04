import homeimg from '../assets/my_pic.jpg'
import '../App.css'
import NavBar from './NavBar'
import About from './About'
import { Helmet } from 'react-helmet'

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
    <div className='home-container'> 
    <div className='about'>
      <div className='bio '>
      <h2>Hello, I'm</h2>
        <h3>Abel Koech</h3>
        <h3> a <span className='span'>Front-end Developer</span></h3>
      </div>
    <div className='home-img mb-3'>
        <img src={homeimg} alt='potrait of Abel Koech'/>
    </div>
    </div>
    
    </div>
    <About/>
  
        
    </div>
  )
}

export default Home

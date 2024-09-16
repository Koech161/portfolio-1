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
        <div className='row text-center' style={{marginTop:'100px'}}>
          <div className='col-md-6'>
          <h2>Hello, I'm</h2>
        <h3>Abel Koech</h3>
        <h3> A <span className='span'>Front-end Developer</span></h3>
      </div>
      <div className='col-md-6'>
      <img className='img-fluid mb-4' src={homeimg} alt='Abel Koech' style={{maxWidth:'450px'}}/>
      </div>
        
        </div>
    <About/>
  
        
    </div>
  )
}

export default Home

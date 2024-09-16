import homeimg from '../assets/my_pic.jpg'
import '../App.css'
import NavBar from './NavBar'
import About from './About'

const Home = () => {

  return (

    <div className='home'>
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

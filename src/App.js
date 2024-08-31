
import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './routes';
import Footer from './components/Footer'
import './style/Footer.css'

function App() {
  return (
    <div className='App'>
      <div className='content'>
      <RouterProvider router={routes}/>
      </div>
     
      <Footer/>
    </div>
    
  );
}

export default App;

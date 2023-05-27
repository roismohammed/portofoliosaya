import { Route, Routes } from 'react-router-dom'
import Index from './Index'
import './scss/styles.scss'
import * as bootstrap from 'bootstrap'
import About from './pages/About'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Services from './pages/Services'
import Contact from './pages/Contact'
import Portofolio from './pages/Portofolio'
AOS.init();
function App() {

  return (
    <div>
      <Index />
      <About />
      <Services/>
      <Portofolio/>
      {/* <Contact/> */}
    </div>
  )
}

export default App

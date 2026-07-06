

import './App.css'
import { Navbar } from './components/Text/Navbar/Navbar'
import { Footer } from './components/Text/footer/footer'
import {Hero} from './components/Text/Hero/Hero'



function App() {
  
  return (
    <div id='app-container'>
    <div id='scrollable'>
      <Navbar /> 
           <Hero />
      </div> 
      <Footer />
    </div>
  )
}

export default App

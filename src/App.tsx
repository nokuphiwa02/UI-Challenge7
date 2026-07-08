

import './App.css';
import { Navbar } from './components/Text/Navbar/Navbar'
import {Hero} from './components/Text/Hero/Hero'
import { Decoration } from './components/Text/Decoration/Decoration'
import { ImageSection } from './components/Text/ImageSection/ImageSection'
import { BottomSection } from './components/BottomSection/BottomSection';
import { Footer } from './components/Footer/Footer';



function App() {
  
  return (
    <>
         <div id='app-container'>
          <div id='scrollable'>
            <Navbar /> 
           <Hero />
           <Decoration/>
           <ImageSection/>
           <BottomSection/>
          </div>
           <Footer/>
        </div>
       
    </>
  )
}

export default App

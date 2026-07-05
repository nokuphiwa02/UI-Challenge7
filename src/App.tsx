

import './App.css'
import { Navbar } from './components/Text/Navbar/Navbar'
import {Text} from './components/Text/Text'
import { useState } from 'react'
import { Footer } from './components/Text/footer/footer'

function App() {
    const [count, setCount] = useState(0)

  return (
    <div id='app-container'>
    <div id='scrollable'>
      <Navbar /> <br/> <br/> <br/>
       <Text variant='h1' > My App </Text>
       <Text variant='h2' > My App </Text>
       <Text variant='p' > My App </Text>
       <Text variant='span' > My App </Text>
       
      </div> 
      <Footer />
    </div>
  )
}

export default App

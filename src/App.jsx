import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='overflow-x-hidden'>
    <Navbar/>
    <Hero/>
    <Services/>
    <About/>
    <Portfolio/>
    <Contact/>
   </div>
  )
}

export default App

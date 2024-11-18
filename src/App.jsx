// import React from 'react'

import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Pricing from "./components/Pricing/Pricing"
import Services from "./components/Services/Services"
import Testimonial from "./components/Test/Testimonial"



const App = () => {
  return (
    <div className=' w-full   '>
    <Header/>
    <Home/>
    <About/>
    <Services/>
    <Pricing/>

    <Testimonial/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App


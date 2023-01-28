import React from 'react'
import {Navbar1} from './Subcomponent/Navbar';
import { Slider1 } from './Subcomponent/Navbar';
import "./../Css/Home.css"
import Footer from './Subcomponent/Footer';
const Home = () => {
  return (
    <>
        <Navbar1/>
        <Slider1/> 
        <Footer/>
    </> 
  )
}

export default Home

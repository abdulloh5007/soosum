import React from 'react'
import './Home.scss'
import Buyurtma from '../Components/Buyurtma/Buyurtma'
import HeadBottom from '../Components/HeadBottom/HeadBottom'
import Header from '../Components/Header/Header'
import Box from '../Components/Box/Box'
import AboutTxt from '../Components/AboutTxt/AboutTxt'
import About from '../Components/About/About'
import Consump from '../Components/Consump/Consump'
import HowUse from '../Components/HowUse/HowUse'
import Fakts from '../Components/Fakts/Fakts'
import Footer from '../Components/Footer/Footer'

function Home() {
  return (
    <div>
        <div className="intro">
          <Header/>
          <HeadBottom/>
        </div>
        <Buyurtma/>
        <Box/>
        <AboutTxt/>
        <About/>
        <Consump/>
        <HowUse/>
        <Fakts/>
        <Footer/>
    </div>
  )
}

export default Home
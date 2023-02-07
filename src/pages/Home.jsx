import React, { useState } from 'react'
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
import RightClick from '../Components/RightClick/RightClick'
import '../Components/RightClick/RightClick.scss'

function Home({ x, y, showMenu }) {
  const style = () => {
    return {
      height: 200,
      width: 150,
      borderRadius: 10,
      backgroundColor: '#6b6262',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      padding: 10,
      top: y,
      left: x,
      position: 'absolute',
      display: showMenu ? 'flex' : 'none',
      zIndex: 99999999
    }
  }
  const reload = () => {
    window.location.reload()
  }

  const rename = () => {
    document.designMode = 'on'
  }

  window.addEventListener('keyup', e => {
    if (e.keyCode == 17 && 16 && 73) {

    }
  })
  const console2 = (e) => {
    e.keyCode = '123'
    console.log(e.keyCode)
    window.open()
    document.onkeydown = 123;
  }
  return (
    <div>
      <div style={style()}>
        <button onClick={reload} style={style.div} className="btn">Refresh</button>
        <button id='openConsole' onClick={console2} style={{ ...style.div, ...style.margin }} className="btn">Console</button>
        <button onClick={rename} style={style.div} className="btn">Rename</button>
      </div>
      <div className="intro">
        <Header />
        <HeadBottom />
      </div>
      <Buyurtma />
      <Box />
      <AboutTxt />
      <About />
      <Consump />
      <HowUse />
      <Fakts />
      <Footer />
      <RightClick />
    </div>
  )
}

const style = {
  div: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
    zIndex: 999999999
  },
  margin: {
    margin: '10px, 0'
  }
}

export default Home
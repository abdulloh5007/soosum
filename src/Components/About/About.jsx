import React from 'react'
import Container from '../Container/Container'
import './About.scss'

import aboutRight from '../../assets/img/aboutRight.png'
import Aos from 'aos'

function About() {

  Aos.init()

  return (
    <div className='aboutBg' id='about'>
        <Container>
            <div className="about">
                <div className="about-left">
                    <b>Kompaniya haqida</b>
                    <p>
                    "Soosum" kompaniyasi 2021-yildan boshlab uzoq sharq o’simligi bo’lgan “Jenshen”ning ildizidan tayyorlangan ichimlikni ishlab chiqarib, O’zbekiston bo’ylab yetkazib berishni yo’lga qo’ydi. Kompaniyamiz Koreyaning "Chejun" ITD hamda Qizil Jenshen sharbati MChJ korxonalari bilan hamkorlikda ishlaydi. "Sunmee" qizil jenshen ildizi Janubiy Koreyada yetishtirilib O’zbekistonda qadoqlanadi.
                    </p>
                </div>
                <div className="about-right">
                  <img src={aboutRight} alt="aboutRight" />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default About
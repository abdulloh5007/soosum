import React from 'react'
import Container from '../Container/Container'
import './Footer.scss'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import logo from '../../assets/img/logo.svg'
import facebook from '../../assets/img/facebook.png'
import instagram from '../../assets/img/instagram.png'
import youtube from '../../assets/img/youtube.png'
import telegram from '../../assets/img/telegram.png'

function Footer() {
  return (
    <div className='footerBg'>
        <Container>
          <div className="footer">
            <div className='footer-first'>
              <a href="#head"><img src={logo} alt="logo" /></a>
              <p>Janubiy Koreyada tayyorlangan haqiqiy 6 yillik qizil jenshen ekstrakti</p>
              <div>
                <a href="#telegram"><img src={telegram} alt="telegram" /></a>
                <a href="#instagram"><img src={instagram} alt="instagram" /></a>
                <a href="#facebook"><img src={facebook} alt="facebook" /></a>
                <a href="#youtube"><img src={youtube} alt="youtube" /></a>
              </div>
            </div>
            <div className='footer-second'>
              <a href="#about">Kompaniya haqida</a>
              <a href="#fakts">Faktlar</a>
              <a href="#product">Mahsulot</a>
            </div>
            <div className='footer-third'>
              <p>Formani toʻldiring, mutaxascislardan bepul konsultatsiya oling va chegirmaga ega boling</p>
              <TextField sx={{ mt: 1, }} id="outlined-basic" label="Ismingiz" variant="outlined" />
              <TextField
                label="Raqamingiz"
                id="outlined-basic"
                defaultValue="+998"
                variant="outlined"
                sx={{ mt: 1, }}
                />
              <Button variant="contained" color="warning">
                Buyurtma berish
              </Button>
            </div>
          </div>
        </Container>
    </div>
  )
}

export default Footer
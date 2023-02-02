import React from 'react'
import Container from '../Container/Container'
import './Header.scss'
import Button from '@mui/material/Button';

import logo from '../../assets/img/logo.svg'

function Header() {
  return (
    <div>
      <Container>
        <div className="header">
          <div className="header-left">
            <img src={logo} alt="logo" />
          </div>
          <div style={{display: 'none'}} className="header-right">
            <a href="#about">Kompaniya haqida</a>
            <a href="#facts">Faktlar</a>
            <a href="#product">Mahsulot</a>
            <select name="language" id="language">
              <option value="UZ">UZ</option>
              <option value="RU">RU</option>
              <option value="EN">EN</option>
            </select>
            <Button variant="contained" color="success">
              Buyurtma berish
            </Button>
          </div>
          <div className="header-right2" style={{display: 'block'}}>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i className="bi bi-list"></i></button>
                <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Menu</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div className="offcanvas-body">
                    <a href='#about'>Kompaniya haqida</a>
                    <a href='#fakts'>Faktlar</a>
                    <a href='#product'>Mahsulot</a>
                    <div className='changer'>
                      <a href="#UZ">UZ</a>
                      <a href="#RU">RU</a>
                    </div>          
                  </div> 
                </div>
              </div>
        </div>
      </Container>
    </div>
  )
}

export default Header
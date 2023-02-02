import React from 'react'
import Container from '../Container/Container'
import './HeadBottom.scss'
import Button from '@mui/material/Button';

import headBottom from '../../assets/img/headerBottom.png'

function HeadBottom() {
  return (
    <div>
        <Container>
            <div className="head">
                <div className="head-left">
                    <p>100% tabiiy</p>
                    <b>Koreya qizil jenshen ichimligi</b>
                    <Button variant="contained" color="success">
                        Buyurtma berish
                    </Button>
                </div>
                <div className="head-right">
                    <img src={headBottom} alt="headBottom" />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default HeadBottom
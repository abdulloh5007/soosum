import React from 'react'
import Container from '../Container/Container'
import './Buyurtma.scss'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Buyurtma() {
  return (
    <div>
      <Container>
        <div className="order">
          <div className="order-left">
            <h2>Buyurtma berish</h2>
            <p>Formani toʻldiring, mutaxascislardan bepul konsultatsiya oling va chegirmaga ega boling</p>
            <TextField id="outlined-basic" label="Ismingiz" variant="outlined" />
            <TextField
              label="Raqamingiz"
              id="outlined-start-adornment"
              sx={{ m: 3, width: '45ch' }}
              defaultValue="+998"
            />
            <Button variant="contained" color="success">
              Buyurtma berish
            </Button>
          </div>
          <div className="order-right">
            <h2>Chegirma</h2>
            <p className='pColor'>1 399 000</p>
            <p className='pColor2'>1 199 000</p>
            <span>foyda <b>200 000</b></span>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Buyurtma
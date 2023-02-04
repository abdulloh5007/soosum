import React, { useState } from 'react'
import Container from '../Container/Container'
import './Buyurtma.scss'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { message } from 'antd';

function Buyurtma() {

  const [value, setValue] = useState('')
  const [value2, setValue2] = useState('')

  const [messageApi, contextHolder] = message.useMessage();
  const success = (e) => {
    e.preventDefault()
    
    setValue(e.target.ism.value)
    setValue2(e.target.raqam.value)

    setTimeout(() => {
      value.length && value2.length > 3 ?
      <>
      {console.log(value)}
      {console.log(value2)}
      </>
      : console.log('Inputlarni to`ldiring');
    }, 1500);
    
    value.length && value2.length > 3 ? messageApi
    .open({
      type: 'loading',
      content: 'Ma`lumotlaringiz tekshirilmoqda..',
      duration: 2.5,
    })
    .then(() => message.success('Ma`lumotlaringiz muvaffaqiyatlik jo`natildi', 2.5))
    :
    messageApi
      .open({
        type: 'loading',
        content: 'Ma`lumotlaringiz tekshirilmoqda..',
        duration: 1.5,
      })
      .then(() => message.warning('Iltimos ma`lumotlaringizni tekshirib qaytadan kiriting', 2.5))
    
    // setInterval(() => {
      e.target.ism.value = ''
      e.target.raqam.value = '+998'
    // }, 3000)

  };
  return (
    <div>
      <Container>
        <div className="order" id='order'>
          <div className="order-left">
            <h2>Buyurtma berish</h2>
            <p>Formani toʻldiring, mutaxascislardan bepul konsultatsiya oling va chegirmaga ega boling</p>
            <form action="#" onSubmit={success}>
              <TextField name='ism' id="outlined-basic" label="Ismingiz" variant="outlined" />
              <TextField
                name='raqam'
                label="Raqamingiz"
                id="outlined-start-adornment"
                sx={{ mt: 3, width: 'auto' }}
                defaultValue="+998"
              />
              {contextHolder}
              <Button type='submit' variant="contained" color="success">
                Buyurtma berish
              </Button>
            </form>
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
import React from 'react'
import './Fakts.scss'
import Container from '../Container/Container'

function Fakts() {
  return (
    <div id='fakts'>
        <Container>
          <div className="fakts">
            <b>Faktlar sonlarda</b>
            <div className="fakts-txt">
              <div>
                <b>100</b>
                <p>100 ga yaqin kasalliklarni oldini olish va davolashda qollaniladi</p>
              </div>
              <div>
                <b>1.3 mlrd</b>
                <p>jenshenni inson uchun eng foydali mahsulot deb hisoblashad 1,3 mlrd xitoyliklar </p>
              </div>
              <div>
                <b>100</b>
                <p>Jenshen o'simligi 100 yilgacha umr ko'radi</p>
              </div>
            </div>
          </div>
        </Container>
    </div>
  )
}

export default Fakts
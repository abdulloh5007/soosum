import React from 'react'
import './Box.scss'
import Container from '../Container/Container'

import boxIn from '../../assets/img/boxIn.png'

function Box() {
  return (
    <div className='boxBg'>
        <Container>
            <div className="box">
                <div className="box-left">
                    <img src={boxIn} alt="boxIn" />
                    <b>Oddiy jen shen 1 199 000</b>
                </div>
                <div className="box-right">
                    <img src={boxIn} alt="boxIn" />
                    <b>Oddiy jen shen 1 199 000</b>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Box
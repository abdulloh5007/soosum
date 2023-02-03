import React from 'react'
import './Consump.scss'

function Consump() {
  return (
    <div className='consumpBg' id='product'>
        <div className="consump">
            <b>Koreya qizil jensheni ichimligini kimlar iste'mol qiladilar?</b>
            <div className="consump-txt">
                <div className="consump-txt-left">
                    <p>O’zida doimiy charchoq va holsizlik xis qiladiganlar</p>
                    <p>Saraton kasalligini oldini olishni istaganlar</p>
                    <p>Aqliy va jismoniy faoliyati pasayganlar</p>
                    <p>Bemorlikdan keyin oyoqqa tezroq turishni xohlaganlar</p>
                </div>
                <div className="consump-txt-right">
                    <p>Jinsiy quvvati kamligidan aziyat chekadiganlar</p>
                    <p>Qarilikni sekinlashtirishni istaganlar</p>
                    <p>Tana va bo’g’imlarda doimiy og’riq xis qiladiganlar</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Consump
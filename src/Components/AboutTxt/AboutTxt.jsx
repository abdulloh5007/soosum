import React from 'react'
import Container from '../Container/Container'
import './AboutTxt.scss'

import aboutTxtRight from '../../assets/img/aboutTxtRight.png';
import aboutTxtLeft from '../../assets/img/aboutTxtLeft.png';
import aboutTxtBottom from '../../assets/img/aboutTxtLeft.png';
import Aos from 'aos';

function AboutTxt() {
    Aos.init()

  return (
    <div>
        <Container>
            <div className="aboutTxt">
                <div className="aboutTxt-first txt">
                    <div data-aos="fade-up-right">
                        <p>
                        Qizil jenshen bilan oddiy jenshenni farqi,yetishtirilishi.
Jenshen mahsulotini ekishdan oldin ekin maydoni 2 yil og'itlar bilan sugorilib tayyorlanadi. 3-yili esa yerga jenshen 2 xil usulda ekiladi,1-jenshen niholini donalab ekish(koreada asosan shu usuldan foydalaniladi),2- urugni sepish orqali. Yerga jenshen ekilgandan song, 1 ~ 8 yil davomida jenshen turli og'itlar bilan sugorilib katta qilinadi.(jenshen yerda qancha turganiga qarab oshancha yillik jenshen deb nomlanadi). Yerdan yangi uzilgan 1~8 yillik ho'l jenshen(koreyschada insam인삼,susam수삼 deb nomlanadi)bu oddiy jenshen hisoblanadi(lekin buniham foydali hususiyatlari juda kop. Giyohlar ichida qizil jenshendan song birinchi orinda turadi)
                        </p>
                    </div>
                    <img data-aos="fade-up-left" src={aboutTxtRight} alt="aboutTxtRight" />
                </div>
                <div className="aboutTxt-second txt">
                    <img data-aos="fade-up-right" src={aboutTxtLeft} alt="aboutTxtLeft" />
                    <div data-aos="fade-up-left">
                        <p>
                        Qizil jenshen bilan oddiy jenshenni farqi,yetishtirilishi.
Jenshen mahsulotini ekishdan oldin ekin maydoni 2 yil og'itlar bilan sugorilib tayyorlanadi. 3-yili esa yerga jenshen 2 xil usulda ekiladi,1-jenshen niholini donalab ekish(koreada asosan shu usuldan foydalaniladi),2- urugni sepish orqali. Yerga jenshen ekilgandan song, 1 ~ 8 yil davomida jenshen turli og'itlar bilan sugorilib katta qilinadi.(jenshen yerda qancha turganiga qarab oshancha yillik jenshen deb nomlanadi). Yerdan yangi uzilgan 1~8 yillik ho'l jenshen(koreyschada insam인삼,susam수삼 deb nomlanadi)bu oddiy jenshen hisoblanadi(lekin buniham foydali hususiyatlari juda kop. Giyohlar ichida qizil jenshendan song birinchi orinda turadi)
                        </p>
                    </div>
                </div>
                <div className="aboutTxt-third">
                    <div>
                        <p>
                        Qizil jenshen bilan jenshenni foydali hususiyatlaridagi farqi- 1-qizil jenshenni aks tasiri oddiy jenshenga qaraganda kamroq, o'zi esa kuchliroq shuning uchun qizil jenshen 50 yoshdan yuqoridagilar uchun judaham qulay va foydali. 2- qizil jenshen hozirgi kundagi eng ko'p kasalliklar( davlenya, saxr,jinsiy zaiflik)ni davolashdagi eng uchun eng kuchli giyohdir. Oddiy jenshen esa asosan yoshlar(15-40 yosh) uchundir u judaham kuchli issiqlik manbayidir. U insondagi dangasa immunitetlarni uyg'otadi va odamni ishchanlik, harakatchanligini oshiradi, insondagi sovuqlikni tanadan quvib chiqaradi va insonni kop bezovta qiladigan shamollash,grip,tanadagi og'riqlar,prostata kabi kasalliklarni yoq qiladi. Korealik jenshen mutahasislari va doctorlarning hulosasiga ko'ra qizil jenshenni 50 yoshdan yuqorilar uchun. Oddiy jenshenni esa 15 yoshdan-50 yoshgacha bolgan insonlar uchun tafsiya qilish eng to'g'ri yo'ldir.
                        </p>
                        <img src={aboutTxtBottom} alt="aboutTxtBottom" />
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default AboutTxt
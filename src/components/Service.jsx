import React from 'react'
import '../styles/service.css'
import service1 from '../IMAGES/service-1.png'
import service2 from '../IMAGES/service-2.png'
import service3 from '../IMAGES/service-3.png'
import {FaArrowRight} from 'react-icons/fa'

function Service() {
  return (
   <section className="service" id='service'>
       <div className="header__text">
        <span>our services</span>
        <h1>our main focus</h1>
      </div>
      <div className="header__service">
         <div className="service__content">
            <img src={service1} alt="" />
            <h1>buy a home</h1>
            <p>over  thousand homes for sale available on the website. we can match you with a house you will want to call. </p>
            <div className="link">
               find a home
              <FaArrowRight id='icon'/>
            </div>
         </div>
         <div className="service__content">
            <img src={service2} alt="" />
            <h1>rent a home</h1>
            <p>over  thousand homes for sale available on the website. we can match you with a house you will want to call. </p>
            <div className="link">
              find a home
              <FaArrowRight id='icon'/>
            </div>
         </div>
         <div className="service__content">
            <img src={service3} alt="" />
            <h1>sell a home</h1>
            <p>over thousand homes for sale available on the website. we can match you with a house you will want to call. </p>
            <div className="link">
              find a home
              <FaArrowRight id='icon'/>
            </div>
         </div>
      </div>
   </section>
  )
}

export default Service
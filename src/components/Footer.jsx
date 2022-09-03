import React from 'react'
import '../styles/Footer.css'
import realState from '../IMAGES/realState.svg'

import {FaLaptopHouse,FaFacebook,FaTwitter,FaLinkedinIn,FaYoutube} from 'react-icons/fa'
import {MdMyLocation,MdPhone,MdMessage} from 'react-icons/md'


function Footer() {
  return (
    <footer>
       <div className="container__footer">
         <div className="logo">
         <img src={realState} alt="" id='logo__icon' />
                <div>
                <h1>salaame</h1> 
                <span className='span__title'>properties</span>
                </div>
                <div className="location__description">
                <span>
                    <MdMyLocation id='icon__desc'/>
                     djibouti ville
                </span>
                <span>
                    <MdPhone id='icon__desc'/>
                    +253-21585269
                </span>
                <span>
                    <MdMessage id='icon__desc' />
                contact@salaam.com
                </span>
                </div>   
          </div>
       <div className="company__container">
                <h1>company</h1>
                    <ul className='quick__link'>
                    <li><a href="">home</a></li>
                    <li><a href="">blog</a></li>
                    <li><a href="">properties</a></li>
                    <li><a href="">locations map</a></li>
                    <li><a href="">contact us</a></li>
                </ul>
        </div>
     

       <div className="company__container">
            <h1>services</h1>
            <ul className='quick__link'>
                    <li><a href="">FAQs</a></li>
                    <li><a href="">clients</a></li>
                    <li><a href="">carees</a></li>
                    <li><a href="">terme & condition</a></li>
                    <li><a href="">privacy policy</a></li>
            </ul>
       </div>
    </div>
       <div className="newsletter">
        <h1>news letter</h1>
        <h2>do you need help with anything?</h2>
        <p>Join thousands of other people salaam subscribers</p>

        <div className="inbox">
            <input type="text" placeholder='email address' />
            <button>subscribe</button>
        </div>

       </div>
    <div className="social__links">
        <FaFacebook id='icon' />
        <FaTwitter id='icon' />
        <FaLinkedinIn id='icon' />
        <FaYoutube id='icon' /> 
    </div>
    </footer>
  )
}

export default Footer
import React from 'react'
import property1 from '../IMAGES/hero-banner.png'

import '../styles/Home.css'
const Home = () => {
  return (
    <section className='home' id='home'>
     <div className="section__banner">
       <div className='banner__left'>
                <p className="title_logo">real estate agency</p>
                <h1>find your dream house by us</h1>
                <div className="wrapper__list">
                  <h1>THE BEST INVESTMENT ON EARTH IS REAL ESTATE</h1>
                  <p>Our Objective is to provide comprehensive and integrated property
                    services and solutions to landlords, buyers, tenants,
                    developers and property investors.</p>
                </div>
                <button>
                  learn more
               </button>
       </div>
         <div className="banner__right">
          <div className="image__container">
            <img src={property1} alt="" />
          </div>
         </div>
        </div>
    </section>
  )
}

export default Home




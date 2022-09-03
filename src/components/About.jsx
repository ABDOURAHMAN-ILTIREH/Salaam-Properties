import React from 'react'
import ReactPlayer from 'react-player'
import {FaHome,FaTree,FaGrinTears} from 'react-icons/fa'
import {MdSecurity} from 'react-icons/md'

import '../styles/About.css'
function About() {
  return (
    <section className='about' id='about'>
      <div className="banner__about">
        <div className="banner__left">
           <ReactPlayer controls url='https://www.youtube.com/watch?v=vhhkfTwZ_yI&t=55s'  className="reactPlayer"/> 
        </div>
        <div className="banner__right">
            <span className='about_font'>about us</span>
            <h1><span>salaam property</span> is the leadiing real estate rental marketplace.</h1>
            <p> Besides enabling our clients to get the best deals available in the real estate sector, we provide end-to-end support.</p>
         <div className="supporting__side">
            <div className="suppor">
               <FaHome id='icon' />
               <span>smart home design</span>
            </div>
            <div className="suppor">
               <FaTree id='icon'/>
               <span>beautyful scene around</span>
            </div>
            <div className="suppor">
               <FaGrinTears id='icon'/>
               <span>expceptional lifestyle</span>
            </div>
            <div className="suppor">
               <MdSecurity id='icon'/>
               <span>complete 24/7 security</span>
            </div>
         </div>
        </div>
      </div>
    </section>
  )
}

export default About
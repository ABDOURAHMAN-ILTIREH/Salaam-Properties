import React from 'react'
import '../styles/Proporties.css'
import Propertie from '../Data/Properite'
import Property from './Property'





const Properties = () => {
  return (
    <section className='properties' id='property'>

      <div className="header__text">
        <span>properties</span>
        <h1>Featured Properties</h1>
      </div>

      <div className="properties__wrapper">
           {
            Propertie.map( (itme)=>(
              <Property {...itme} key={itme.id}/>
            ))
           }
      </div>
    </section>
  )
}

export default Properties
import React from 'react'

import {FaBath,FaBed,FaSquare} from 'react-icons/fa'
import {MdMyLocation} from 'react-icons/md'

const Property = ({imageurl,title,price,local,location}) => {

  return (
    <>
        <div className="properties__content">
               <div className="image__property">
                  <img src={imageurl} alt="" />
                  <span className="span">
                    <MdMyLocation id='icon'/>
                    {local}
                    </span>
                  <p className="description">{location}</p>
               </div>
              <div className="wrapper__content">
                <h4>{price}<span>fd/month</span></h4>
                <h1>{title}</h1>
                <p>beautiful huge 1 family house in heart of djibouti</p>
                <div className="descript__home">
                  <div className="space bedroom">
                  3 <FaBed />
                  <p>bedrooms</p>
                  </div>

                  <div className="space bathroom">
                  2<FaBath />
                  <p>bathrooms</p>
                  </div>

                  <div className="space square">
                  3450 <FaSquare />
                  <p>square ft</p>
                  </div>
                </div>
              </div>
          </div>           
    </>
  )
}

export default Property
import React from 'react'
import "./Hero2.css"

const Hero2 = (props) => {
  return (
    <div className='hero2'>
      <div className='hero2-img'>
        <img src={props.image} alt="" />
      </div>
      <div className="hero2-main">
        <div className="hero2-txt">
          <h1>{props.h1}</h1>
          <p>{props.para}</p>
        </div>
      </div>
    </div>
  )
}

export default Hero2

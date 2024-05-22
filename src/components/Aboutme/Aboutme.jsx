import React from 'react'
import react1 from "../../Assets/react1.jpg"
import react2 from "../../Assets/react2.webp"
import "./Aboutme.css"
const Aboutme = () => {
  return (
    <div className='aboutme'>
      <div className="aboutme-left">
        <p id='question'>Who Am I?</p>
        <p>Im a react front-end developer.I create responsive secure websites for my clients.</p>
        <button className='btn'>CONTACT</button>
      </div>
      <div className="aboutme-right">
        <div className="image-container">
          <div className="top">
            <img src={react1} alt="" />
          </div>
          <div className="bottom">
            <img src={react2} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutme

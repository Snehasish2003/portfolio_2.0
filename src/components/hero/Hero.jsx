import React from 'react'
import "./Hero.css"
import hero_img from "../../Assets/intro-bg.jpg";
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-img'>
        <img src={hero_img} alt="" />
      </div>
      <div className="hero-main">
        <div className="hero-txt">
          <p>Hi, I'M A WEB-DEVELOPER.</p>
          <h1>Full Stack Developer.</h1>
        </div>
        <div className="hero-btn">
         <Link to="portfolio_2.0/Projects"> <button className='btn yellow' >PROJECTS</button></Link>
         <Link to="/Contact"> <button className='contact-btn btn'>CONTACT</button></Link>
          
        </div>
      </div>
    </div>
  )
}

export default Hero

import React, { useState } from 'react'
import {Link} from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import "./Navbar.css"
const Navbar = () => {
  const [color,setColor]= useState(false);
  const [click,setClick]=useState(false);
  const handelClicked=()=>{setClick(!click)}
  const changeColor=()=>{
    if(window.scrollY >=100){
      setColor(true);
    }
    else{
      setColor(false);
    }
  }
  window.addEventListener("scroll", changeColor);
  return (
    <div className={color? "navbar navbar-bg":"navbar"}>
        <div className="navbar-logo">
            <h2>Portfolio.</h2>
        </div>
        <div className={click ?"navbar-elements active":"navbar-elements"}>
            <Link to="/" onClick={handelClicked}>Home</Link>
            <Link to="/Projects" onClick={handelClicked}>Projects</Link>
            <Link to="/About" onClick={handelClicked}>About</Link>
            <Link to="/Contact" onClick={handelClicked}>Contact</Link>
        </div>
        <div className="hamburger">
        {!click ? 
          <RxHamburgerMenu size={20} style={{color:"#fff"} } onClick={handelClicked}/>:
          <RxCross2 size={20} style={{color:"#fff"}} onClick={handelClicked}/>
        }
        </div>
    </div>
  )
}

export default Navbar

import React from 'react'
import { FaHouse } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdOutgoingMail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./Footer.css"
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-left'>
                <div className="house footer-left-element">
                    <FaHouse />
                    <div className='address '>
                        <p>Jhanjirmangala,</p>
                        <p>cuttack.</p>
                    </div>
                </div>
                <div className='phone footer-left-element'>
                    <FaPhone />
                    <p>7504898310</p>
                </div>
                <div className="email footer-left-element">
                    <MdOutgoingMail />
                    <p>sonu@2003.sahoo@gmail.com</p>
                </div>
            </div>
            <div className='footer-right'>
                <div className="heading">
                    <p>About</p>

                </div>
                <div className='about'>
                    <p>This is me Snehasish. </p>
                    <p>I enjoy discussing new Projects and design challenges</p>
                </div>
                <div className="contact-icons">
                    <FaFacebook />
                    <FaTwitter />
                    <FaLinkedin />
                </div>
            </div>
        </div>
    )
}

export default Footer

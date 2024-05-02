import React from 'react';
import { Link } from 'react-router-dom';



function Footer() {
  return (
    <>
    <footer>
        <div className="footer-segments container">
            <div className="logo-section">
                <div className="log">
                   <h2 style={{color:'#2d7221'}}>AMITI</h2>
                    <p>Leading Assistive Technology Provider in west AfricaL</p>
                </div>
                <div className="about">
                    <h3>About us</h3>
                    <p>Empowering independence through innovative equipment for disabilities..</p>
                </div>
                </div>
                <div className="contact-us">
                    <h3>Contact</h3>
                    <p>
                    <i className="fa-solid fa-phone" style={{color: "#905a23;"}}></i>
                   <b> +234 8025108533</b>
                    </p>
                    <p>
                        <i className="fa-solid fa-envelope-circle-check" style={{color: "#905a23;"}}></i>
                        <b>hashiyahbasharu@gmail.com</b>
                    </p>
                   

                </div>

                <div className="link">
                    <h3> Quick Links</h3>
                         <li><Link to='/' >Home</Link></li>
                   <li><Link to='/Shop'>Shop</Link></li>
                   <li> 
                   <button className='diff-btn'>contact us</button></li>

                </div>

                <div className="direct-contact">
                    <h3>Order directly from us</h3>
                    <button>Send us a message</button>
                </div>
            </div>
            <div className="container hr">
            <hr />
                    <div>
                    Copyright © 1996-2024 Amiti general Company S.L. All rights reserved.
                    </div>
            </div>
    </footer>
    </>
  )
}

export default Footer
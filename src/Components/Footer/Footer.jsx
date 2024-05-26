import React from 'react'
import './Footer.css'
import logo from '../Assets/logo_big.png'
import insta from '../Assets/instagram_icon.png'
import pin from '../Assets/pintester_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={logo} alt="" />
            <p>KIRAN'S SHOP</p>
        </div>
          <ul className="footer-links">
            <li>Company</li>
            <li>Product</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <div className="footer-social-icon">
            <div className="footer-icons-container">
              <img src={insta} alt="" />
            </div>
            <div className="footer-icons-container">
              <img src={pin} alt="" />
            </div>
            <div className="footer-icons-container">
              <img src={whatsapp} alt="" />
            </div>
          </div>
          <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - All Right Reserved</p>
          </div>
    </div>
  )
}

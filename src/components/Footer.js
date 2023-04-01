import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';
import ReactWhatsapp from 'react-whatsapp';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Contact Us For Getting Worlds Best Services
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Navigate Us</h2>
            <Link to='/'>Home</Link>
            <Link to='/About'>About Us</Link>
            <Link to='/Services'>Services</Link>
            <Link to='/ContactUs'>Contact</Link>
          </div>
       
        </div>
        <div className='footer-link-wrapper'>
        
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            
            <Link to='/ContactUs'>Facebook</Link>
            <Link to='/ContactUs'>Gmail</Link>
            <ReactWhatsapp number="+971508508592" className="reactwhatsapp"><Link style={{fontSize:"15px"}}>WhatsApp</Link></ReactWhatsapp> 
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              AUTO | EXPERTS
             
            </Link>
          </div>
          <small class='website-rights'>AUTO | EXPERTS © 2023</small>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href='https://www.facebook.com/autorepairworkshop786?mibextid=ZbWKwL'
              target='_blank'
              aria-label='Facebook' rel="noreferrer"
            >
              <i class='fab fa-facebook-f' />
            </a>
            
            
            <ReactWhatsapp number="+971508508592" className="reactwhatsapp"><i class='fab fa-whatsapp' /></ReactWhatsapp>  
            
            <Link
              class='social-icon-link '
              to='mhussnainafeez19@gmail.com'
              target='_blank'
              aria-label='gmail'
            >
              <i class="fa-solid fa-envelope"/>
            </Link>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

import React from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'
import ReactWhatsapp from 'react-whatsapp'
function Contact() {
  return (
    <>
     <div className="contact_main">
      <h1>Contact Us</h1>
      <h3>How to Contact Us?</h3>
    
      <div className='links'>  <div><i class="fa-solid fa-location-dot"/></div><div className='details'>Musaffah -M5-Abu Dhabi -United Arab Emirates</div></div>
    
      <div className='links'>  <div><i class="fa-solid fa-phone"/></div><div className='details'><ReactWhatsapp number="+971508508592" style={{border:"none"}}>+971508508592</ReactWhatsapp></div></div>
      <div className='links'>  <div><i class="fa-solid fa-phone"/></div><div className='details'><ReactWhatsapp number="+971508508592" style={{border:"none"}}>+0506642823</ReactWhatsapp></div></div>
    
      <div className='links'>  <div><i class="fa-solid fa-envelope"/></div><div className='details'>autoexperts212@gmail.com</div></div>
    
      <div className='links'>  <div><i class="fa-brands fa-facebook"/></div><div className='details'><Link to="https://www.facebook.com/autorepairworkshop786?mibextid=ZbWKwL">Auto Experts</Link></div></div>
    
     </div>
    </>
  )
}

export default Contact

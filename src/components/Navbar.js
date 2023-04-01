import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import logo from './images/logo.png'
import { Button } from './Button';
import './Navbar.css'

const Navbar = () => {
    const [click , setClick]=useState(false);
    const [button, setButton] = useState(true);

    const handleClick = ()=>setClick(!click);
    const closeMobileMenu=()=>setClick(false);
    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };
    
      useEffect(() => {
        showButton();
      }, []);
    
      window.addEventListener('resize', showButton);
  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
            <div className="navbar-logo">
          <Link to="/" style={{color:"white"}} className='logo'>
            <img src={logo} alt="" style={{height:"3rem"}}/>
          </Link>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times':"fas fa-bars"}/>
          </div>
          <ul className={click ? "nav-menu active":"nav-menu"}>
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
            </li>
            <li className='nav-item'>
                <Link to='/About' className='nav-links' onClick={closeMobileMenu}>About</Link>
            </li>
            <li className='nav-item'>
                <Link to='/Services' className='nav-links' onClick={closeMobileMenu}>Services</Link>
            </li>
            <li className='nav-item contactbtn'>
                <Link to='/ContactUs' className='nav-links-mobile' onClick={closeMobileMenu}>Contact Us</Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>ContactUs</Button>}
          
    </div>
    </nav>
    </>
  )
}

export default Navbar

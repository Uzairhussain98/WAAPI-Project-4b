 import React from 'react'
 import './Header.css'
 import logo from './logo.png'

 
 const Header = () => {
   return (
     <div className="header">
        <div className="header__logo">
            <img className="logo__image" src={logo} alt="logo"/>
            <h3>Zapre Technologies</h3>

        </div>
        <div className="header__links">
        <h4 className="link">Home</h4>
        <h4 className="link">About Us</h4>
        <h4 className="link">Contact</h4>


        </div>

     </div>
   )
 }
 
 export default Header
 
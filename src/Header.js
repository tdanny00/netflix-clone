import React from 'react'
import "./Header.css"

function Header() {
  return (
    <div className="header">
        <div className='header_logo_div'>
             <img className='header__logo' src='./nflogo.svg' alt='asd'/>
        </div>
        <div className='header__login'>
            <h4>Login</h4>
        </div>
    </div>
  )
}

export default Header
import { logDOM } from '@testing-library/react';
import React, { useState } from 'react';
import './nav.css';

const Nav = () => {

    const[isMobile, setIsMobile] = useState(false);

  return (
    <header className='nav_header flex'>
        <div className='nav_logo flex'>
            <img src='images/logo.svg' alt='logo' />
            <h2>MATRIX LABS</h2>
        </div>
        <button onClick={() => {
            setIsMobile(true);
            console.log(isMobile);
        }}
        className='mobile-nav-toggle' 
        aria-controls='nav_nav' 
        aria-expanded='false ' > <span className='sr-only'>menu</span> </button>
        <ui id='nav_nav' className='nav_nav flex' >
            <p>
                Home
            </p>
            <p>
                About
            </p>
            <p>
                Whitepaper
            </p>
            <p>
                Audit
            </p>
            <p>
                Telegram
            </p>

            <button className='nav__btn' >CONNECT</button>
            
        </ui>
       
    </header>
  )
}

export default Nav;
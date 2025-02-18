import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../LOGO.png';

function Header() {
    return (
        <header>
        <nav className='navbar'>
        <div className='logo-container'>
        <img src={logo} alt="logo" className='logo'/>
         </div>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/About">About</Link>
            </li>
            </ul>
        </nav>
        </header>
    );
    }

    export default Header;

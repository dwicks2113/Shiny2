import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header>
        <nav>
            <ul>
            <li>
                <Link to="/pages/Home.js">Home</Link>
            </li>
            <li>
                <Link to="/pages/About.js">About</Link>
            </li>
            </ul>
        </nav>
        </header>
    );
    }

    export default Header;

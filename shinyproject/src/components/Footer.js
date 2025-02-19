import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import footer_copyright from '../footer_copyright.png'

function Footer () {
  return (
    <footer>
    <div className='footer-container'>
      <ul>
          <li>
            <Link to='/'>Return to Home page</Link>
          </li>
      </ul>
          <img src={footer_copyright} alt='Copyright' className='footer_copyright' />
        </div>
    </footer>
  )
}

export default Footer

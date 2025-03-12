import React from 'react'
// import { Link } from 'react-router-dom'
import './Footer.css'
import logo_footer from '../LOGO_footer.png'
import footer_copyright from '../footer_copyright.png'

function Footer () {
  return (
    <footer>
    <div className='footer-container'>
      <img src={logo_footer} alt='logo' className='logo_footer' />
      
          <img src={footer_copyright} alt='Copyright' className='footer_copyright' />
        </div>
    </footer>
  )
}

export default Footer

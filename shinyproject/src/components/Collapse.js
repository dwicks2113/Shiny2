import React, { useState } from 'react'
import './Collapse.scss'

function Collapse ({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)
  const toggleCollapse = () => {
    setIsOpen(!isOpen)
    document.documentElement.style.setProperty(
        '--page-height', isOpen ? 'auto' : '100vh'); // Set the height of the document to 100vh when the collapse is open
  }

  return (
    <div className='collapse'>
      <button onClick={toggleCollapse} className='collapse-button-about'>
        {title}
        <span className={`collapse-arrow ${isOpen ? 'down' : 'right'}`}></span>
      </button>
      {isOpen && <div className='collapse-content'>{children}</div>}
    </div>
  )
}
export default Collapse

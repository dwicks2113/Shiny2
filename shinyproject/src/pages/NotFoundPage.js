import React from 'react'
import { Link } from 'react-router-dom'
import './NotFoundPage.css'

function NotFoundPage () {
  return (
    <div className='not-found'>
      <h1>404</h1> 
       <p >Oops! The page you are looking for does not exist.</p>
      <Link to='/' className='return-home'>Return to the Homepage</Link>
    </div>
     )
    }
export default NotFoundPage

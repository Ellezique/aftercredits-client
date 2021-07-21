import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Navbar Logo and AfterCredits  */}
            <Link to='/' className="logo-section">
              <i class="fas fa-film"> AfterCredits </i>
            </Link>
          {/* Navbar Links: */}
          <ul>
            <li className='nav-item'>
              <Link Link to='/' className='nav-links'>
                HOME
              </Link>
            </li>
            <li className='nav-item'>
              <Link Link to='/LogIn' className='nav-links'>
                LOG IN
              </Link>
            </li>
            <li className='nav-item'>
              <Link Link to='/SignUp' className='nav-links'>
                SIGN UP
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Contact' className='nav-links'>
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar

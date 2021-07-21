import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <ul>
            <li className='nav-item'>
              <Link Link to='/' className='nav-links'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link Link to='/LogIn' className='nav-links'>
                LogIn
              </Link>
            </li>
            <li className='nav-item'>
              <Link Link to='/SignUp' className='nav-links'>
                SignUp
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Contact' className='nav-links'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar

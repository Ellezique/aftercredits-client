import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  
  //set state
  const [click, setClick] = useState(false)
  //when clicked, change the state to the opposite of set state i.e. change from false to true
  const handleClick = () => setClick(!click)
  //The burger menu should always be closed, except when clicked on.
  const closeBurgerMenu = () => setClick(false)

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">

          {/* Navbar Logo and AfterCredits title, linking back to home page. Burger menu hidden. */}
            <Link to='/' className="logo-section">
              <i className="fas fa-film"> AfterCredits</i>
            </Link>

          {/*If clicked, show burger menu x icon. If not clicked, show burger menu bars icon */}
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          {/* Navbar Links: */}
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
              <Link to='/SignUp' className='nav-links' onClick={closeBurgerMenu}>
                SIGN UP
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/LogIn' className='nav-links' onClick={closeBurgerMenu}>
                LOG IN
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeBurgerMenu}>
                HOME
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Contact' className='nav-links' onClick={closeBurgerMenu}>
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

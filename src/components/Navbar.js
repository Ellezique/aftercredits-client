import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <h1>NAVBAR</h1>
          <ul>
            <li>
              <Link>
                Home
              </Link>
            </li>
            <li>
              <Link>
                LogIn
              </Link>
            </li>
            <li>
              <Link>
                SignUp
              </Link>
            </li>
            <li>
              <Link>
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

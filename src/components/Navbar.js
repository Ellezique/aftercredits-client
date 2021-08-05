import React, { useState } from 'react'
//import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useHistory } from 'react-router'

const Navbar = ({loggedInUser, activateUser}) => {
  function logout(e){
    e.preventDefault()
    console.log("logout")
    activateUser("")
  }

  const history = useHistory()
  
    //BURGER MENU
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
          {/*If clicked, show burger menu x icon. If not clicked, show burger menu bars icon */}
           <div className='menu-icon' onClick={handleClick}>
             <i className={click ? "fas fa-times" : "fas fa-bars"} />
           </div>
            {/* Navbar Logo and AfterCredits title, linking back to home page. Burger menu hidden. */}
            <Link to='/' className="logo-section" onClick={() => history.go(0)}>
              <img className="popcorn" src="./images/popcorn.png" alt="popcorn" />
              AfterCredits
            {/* <i className="fas fa-film" id="navtitle"> AfterCredits</i> */}
            </Link>
                  <div className={click ? 'nav-menu active' : 'nav-menu'}>
                            {loggedInUser ? 
                              <>
                                 {loggedInUser}
                                                                   
                                  {/* <Link to='/card/messages'>See chatroom messages for a select movie card </Link>      DONT PUT THIS LINK IN NAVBAR, have it in the relevant component, see NotFound and App.js as example*/}
                                  {/* <Link to='/card/newmessage'>Post a new message to a selected movie card</Link>  DONT PUT THIS LINK IN NAVBAR, have it in the relevant component, see NotFound and App.js as example*/}
                                  <Link to="/" className='nav-links' onClick={logout}>Log Out</Link>
                              </>
                            : <> 
                                  <Link to='/SignUp' className='nav-links' onClick={closeBurgerMenu}>Sign Up</Link>
                                  <Link to='/LogIn' className='nav-links' onClick={closeBurgerMenu}>Log In</Link>
                              </>
                            }
                            <Link to='/' className='nav-links' onClick={() => {
                              closeBurgerMenu()
                              history.go(0)
                            }}>Home</Link>
                            <Link to='/Contact' className='nav-links' onClick={closeBurgerMenu}>Contact</Link>
                  </div>
          </div>
      </nav>

    </>
  )
}

export default Navbar

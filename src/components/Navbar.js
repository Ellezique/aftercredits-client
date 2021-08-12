import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalState } from '../utils/stateContext'
import './Navbar.css'
import './General.css'

const Navbar = () => {
  const {store, dispatch} = useGlobalState()
  const {loggedInUser} = store

  function logout(){
    sessionStorage.clear()
    dispatch({type: 'logout', data: null})
    return "Logged out"
  }
  
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
           <div className='menu-icon' onClick={handleClick}>
             <i className={click ? "fas fa-times" : "fas fa-bars"} />
           </div>
            <Link to='/reload' className="logo-section">
              <img className="popcorn" src="./images/popcorn.png" alt=""/>
              {/* AfterCredits */}
            {/* <i className="fas fa-film" id="navtitle"> AfterCredits</i> */}
            </Link>
            <Link to='/reload' className="nav-logo">
              AfterCredits
            </Link>
                  <div className={click ? 'nav-menu active' : 'nav-menu'}>
                            {loggedInUser ? 
                              <>
                                 {loggedInUser}
                                                                   
                                  {/* <Link to='/card/messages'>See chatroom messages for a select movie card </Link>      DONT PUT THIS LINK IN NAVBAR, have it in the relevant component, see NotFound and App.js as example*/}
                                  {/* <Link to='/card/newmessage'>Post a new message to a selected movie card</Link>  DONT PUT THIS LINK IN NAVBAR, have it in the relevant component, see NotFound and App.js as example*/}
                                  <Link to="/reload" className='nav-links' onClick={logout}>Log Out</Link>
                              </>
                            : <> 
                                  <Link to='/SignUp' className='nav-links' onClick={closeBurgerMenu}>Sign Up</Link>
                                  <Link to='/LogIn' className='nav-links' onClick={closeBurgerMenu}>Log In</Link>
                              </>
                            }
                          
                            <Link to='/reload' className='nav-links' id="item-home" onClick={closeBurgerMenu}>Home</Link>
                            <Link to='/Contact' className='nav-links' id="item-contact" onClick={closeBurgerMenu}>Contact</Link>   
                  </div>
          </div>
      </nav>

    </>
  )
}

export default Navbar

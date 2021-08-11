import React, { useState, useReducer } from 'react'
import { StateContext } from './utils/stateContext'
import reducer from './utils/stateReducer'

import Navbar from './components/Navbar.js'
import NotFound from './components/NotFound'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
//RAILS API: getMessages, getCards
// import { getMessages } from './services/messagesService.js'
import './App.css'
import Home from './pages/Home'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import Contact from './pages/Contact'
import CreateCard from './pages/CreateCard'


const App = () => {
  const initialState = {
    isLoggedIn: false,
  }
  const [store, dispatch] = useReducer(reducer, initialState)

  const [loggedInUser, setLoggedInUser] = useState("")

  function activateUser(name){
    setLoggedInUser(name)
  }

return (
    <div className="App">
      <StateContext.Provider value={{store, dispatch}}>
      <BrowserRouter>
      <Navbar loggedInUser={loggedInUser} activateUser={activateUser}/>
        <Switch>
            <Route exact path='/' component={Home} />
            <Redirect exact from="/reload" to="/" />
            <Route exact path='/LogIn' 
              render={(props)=> <LogIn {...props} activateUser={activateUser}/>}
            />
            <Route exact path='/SignUp' component={SignUp} />
            <Route exact path='/Contact' component={Contact} />
            <Route exact path='/CreateCard' component={CreateCard} />
            <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
      </StateContext.Provider>
    </div>
  )
}

export default App



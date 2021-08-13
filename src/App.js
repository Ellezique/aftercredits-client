import React, { useReducer } from 'react'
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
    cards: [],
    messages: [],
    messageDeleted: false,
    loggedInUser: sessionStorage.getItem('user') || null,
    token: sessionStorage.getItem('token') || null,
    isAdmin: sessionStorage.getItem('admin') || null,
    loading: true,
  }
  const [store, dispatch] = useReducer(reducer, initialState)

return (
    <div className="App">
      {/* Provides global state to the application */}
      <StateContext.Provider value={{store, dispatch}}>
        {/* Handles app routes for navigation */}
        <BrowserRouter>
          <Navbar/>
          <Switch>
              <Route exact path='/' component={Home} />
              <Redirect exact from="/reload" to="/" />
              <Route exact path='/LogIn' 
                render={(props)=> <LogIn {...props} />}
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



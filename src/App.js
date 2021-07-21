import React from 'react'
import Navbar from './components/Navbar.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//import './App.css'
import Home from './components/pages/Home'
import LogIn from './components/pages/LogIn'
import SignUp from './components/pages/SignUp'
import Contact from './components/pages/Contact'

const App = () => {
  return (
    <div className="App">
          <Router >
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/LogIn' component={LogIn} />
                <Route path='/SignUp' component={SignUp} />
                <Route path='/Contact' component={Contact} />
            </Switch>
          </Router>
    </div>
  )
}

export default App

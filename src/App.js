import React from 'react'
import Navbar from './components/Navbar.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//import './App.css'
import Home from './pages/Home'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import Contact from './pages/Contact'

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

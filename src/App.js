import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar.js'
import NotFound from './components/NotFound'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
//import './App.css'
import Home from './pages/Home'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import Contact from './pages/Contact'

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState("")

  function activateUser(name){
    setLoggedInUser(name)
  }

  // to get data from rails api 
  // useEffect(()=>{
  //   fetch("")
  // },[])


  return (
    <div className="App">
      <BrowserRouter>
      <Navbar loggedInUser={loggedInUser} activateUser={activateUser}/>
        <Switch>
          {/* <Route exact path="/">
            <Redirect to="cards"/>
          </Route> */}
            <Route exact path='/' component={Home} />
            {/* <Route exact path='/cards' component={Cards} /> */}
            <Route exact path='/LogIn' component={LogIn} />
            <Route exact path='/SignUp' component={SignUp} />
            <Route exact path='/Contact' component={Contact} />
            <Route component={NotFound} />
        </Switch>
      </BrowserRouter>

      {/* <Router >
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/LogIn' component={LogIn} />
          <Route path='/SignUp' component={SignUp} />
          <Route path='/Contact' component={Contact} />
        </Switch>
      </Router> */}
    </div>
  )
}

export default App

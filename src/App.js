import React, { useState } from 'react'
// import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar.js'
import NotFound from './components/NotFound'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
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

//the chatroom messages for each card & creating a new message, each need to render with props in routing below. See T3W9- Thursday Morning- Brisbane lecture*/
//May need to add a route for the card component as well.
return (
    <div className="App">
      <BrowserRouter>
      <Navbar loggedInUser={loggedInUser} activateUser={activateUser}/>
        <Switch>
            <Route exact path='/' component={Home} />
            {/* <Route exact path="/cards/:id">
              <Redirect to="/cards/:id/messages"/>
            </Route> */}
            {/* <Route exact path='/messages' 
              render={(props)=> <Messages{...props} messageList={messageList}/>}
              /> */}
            {/* <Route exact path="/newmessage"
              render{()=> <MessageForm loggedInUser={loggedInUser} addMessage={addMessage}/>}
            /> */}
            <Route exact path='/LogIn' 
              render={(props)=> <LogIn {...props} activateUser={activateUser}/>}
            />
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



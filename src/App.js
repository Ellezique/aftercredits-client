// import React, { useState } from 'react'
import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar.js'
import NotFound from './components/NotFound'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import {getMessages} from './services/messagesService.js'
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

  // to get data from rails api. See src/services folder. 
  // useEffect(()=>{
  //   console.log("effect")
  //   getMessages()
  //   .then((messages) => console.log(messages))
  //   .catch(error => console.log(error))
  // },[])

//the chatroom messages for each card & creating a new message, each need to render with props in routing below. See T3W9- Thursday Morning- Brisbane lecture*/
//probably need to add a route for the card component as well.
//Below has a commented out find() function, that should ideally be extracted into its own function T3W9- Thursday Morning- Brisbane @ 2:10:00

  // function getMessage(id){
  //   return messageList.find(m=> m.id === parseInt(id))
  // }

return (
    <div className="App">
      <BrowserRouter>
      <Navbar loggedInUser={loggedInUser} activateUser={activateUser}/>
        <Switch>
            <Route exact path='/' component={Home} />
            {/*??? <Route exact path="/cards/:id">
              <Redirect to="/cards/:id/messages"/>
            </Route> */}
            {/* <Route exact path='/messages' 
              render={(props)=> <Messages{...props} messageList={messageList}/>}
              /> */}
            {/* <Route exact path="/newmessage"
              render{()=> <MessageForm loggedInUser={loggedInUser} addMessage={addMessage}/>}
            /> */}
            {/* <Route exact path="messages/:id"
              render={(props)=> <Message {...props}
                message={getMessage(props.match.params.id)}/>}
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



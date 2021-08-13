import React, { useState } from 'react'
import { useGlobalState } from './../utils/stateContext'
import { Link } from 'react-router-dom'
import Api from './../utils/Api'
//Styling is handled by ContactForm.css

// ADMIN USERS FROM RAILS SEEDS FILE:
// (username: "Gizelle", email: "gizelle205@hotmail.com", password: "password123456", password_confirmation: "password123456")
// (username: "testuser", email: "test@email.com", password: "123456", password_confirmation: "123456")

const LogIn = ({ history }) => {
  const { dispatch } = useGlobalState()
  const initialFormData = {
    email: "",
    password: ""
  }
  const [formData, setFormData] = useState(initialFormData)

  function handleFormData(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  //handles setting user and jwt details for verification throughout the app and when calling the backend on user log in
  function handleSubmit(e) {
    e.preventDefault()
    signIn(formData)
    .then((response) => {
      console.log(response)
      const {username, jwt, isAdmin} = response
      sessionStorage.setItem('token', jwt)
      sessionStorage.setItem('user', username)
      sessionStorage.setItem('admin', isAdmin)
      dispatch({type: 'setLoggedInUser', data: username})
      dispatch({type: 'setToken', data: jwt})
      dispatch({type: 'setIsAdmin', data: isAdmin})
    })
    .catch((e)=>{console.log(e)})

    return history.push("/") //redirects user to home page after log in submit
  }

  //Handles call to server for user login functionality
  async function signIn(formData) {
    const response = await Api.serverApi.users.auth.signin(formData)
    console.log('signIn resp', response.data)
    return response.data
  }

  return (
    <div>
      <video src='https://res.cloudinary.com/ellezique/video/upload/v1628310794/background_sgqbly.mp4'autoPlay loop muted/>
      <div className="form">
        <div className="formbox">
          <h1>Log In</h1>
          <p>If you already have an account, please log in:</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" onChange={handleFormData} />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" onChange={handleFormData} />
            <br></br>
            <input type="submit" value="Log In" />
          </form>
          <br></br>
          <p>If you are a new user, you will need to create an account before you can join the chatrooms:</p>
          <Link to='/SignUp' className="hyperlink2">Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default LogIn
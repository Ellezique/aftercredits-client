import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Api from './../utils/Api'
import { useGlobalState } from './../utils/stateContext'

//Styling is handled by ContactForm.css

// USERS FROM RAILS SEEDS FILE:
// (username: "Gizelle", email: "gizelle205@hotmail.com", password: "password123456", password_confirmation: "password123456")
// (username: "testuser", email: "test@email.com", password: "123456", password_confirmation: "123456")

const SignUp = ({ history }) => {
  const {dispatch} = useGlobalState()

  const initialFormData = {
    username: "",
    email: "",
    password: "",
    password_confirmation: ""
  }
  const [formData, setFormData] = useState(initialFormData)

  function handleFormData(e) {
    setFormData({
      ...formData,
      //use e.tar.get.id or e.target.name
      [e.target.name]: e.target.value
    })
  }

  //handles setting user and jwt details for verification throughout the app and when calling the backend on user creation
  function handleSubmit(e) {
    e.preventDefault()
    createUser(formData)
    .then((response)=>{
      const {username, jwt, isAdmin} = response
      sessionStorage.setItem('token', jwt)
      sessionStorage.setItem('user', username)
      sessionStorage.setItem('admin', isAdmin)
      dispatch({type: 'setLoggedInUser', data: username})
      dispatch({type: 'setToken', data: jwt})
      dispatch({type: 'setIsAdmin', data: isAdmin})
    })

    return history.push("/") //redirects user to home page after log in submit
  }

  //Handles api call to backend for user creation
  async function createUser(formData) {
    const response = await Api.serverApi.users.auth.signup(formData)
    console.log('signup resp',response)
    return response.data
  }

  return (
    <div>
      <video src='https://res.cloudinary.com/ellezique/video/upload/v1628310794/background_sgqbly.mp4'autoPlay loop muted/>
      <div className="form">
        <div className="formbox">
          <h1>Sign Up</h1>
          <p>If you are a new user, you will need to create an account before you can join the chatrooms:</p>
          <form onSubmit={handleSubmit}>

            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" onChange={handleFormData} />
            <label htmlFor="text">Username:</label>
            <input type="text" name="username" id="username" onChange={handleFormData} />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" onChange={handleFormData} />
            <br></br>
            <label htmlFor="password">Confirm Password:</label>
            <input type="password" name="password_confirmation" id="password_confirmation" onChange={handleFormData} />
            <br></br>
            <p>By signing up, you certify and confirm that you are at least 18 years old.</p>
            <input type="submit" value="Sign up" />
          </form>
          <br></br>
          <p>If you already have an account, please log in:</p>
          <Link to='/LogIn' className="hyperlink2">Log In</Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp
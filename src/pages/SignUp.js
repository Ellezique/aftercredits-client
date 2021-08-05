import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// USERS FROM RAILS SEEDS FILE:
// (username: "Gizelle", email: "gizelle205@hotmail.com", password: "password123456", password_confirmation: "password123456")
// (username: "testuser", email: "test@email.com", password: "123456", password_confirmation: "123456")

const SignUp =({history, activateUser})=> {
  console.log(history)
  const initialFormData = {
    username: "", 
    email: "",
    password: "",
    password_confirmation: ""
  }

  const [formData, setFormData] = useState(initialFormData)

  function handleFormData(e){
    setFormData({
      ...formData,
      //use e.tar.get.id or e.target.name
      [e.target.name] : e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    // console.log("You clicked login: ", formData.email)
    // console.log(formData.password)
    activateUser(formData.email)
    return history.push("/") //redirects user to home page after log in submit
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" onChange={handleFormData}/>
          <label htmlFor="text">Username:</label>
          <input type="text" name="username" id="username" onChange={handleFormData}/>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" onChange={handleFormData} />
          {/* <input type="text" name="username" id="username" onChange={handleFormData}/> */}
          <br></br>
          <label htmlFor="password">Confirm Password:</label>
          <input type="password" name="password_confirmation" id="password_confirmation" onChange={handleFormData} />
          <br></br>
          <input type="submit" value="Sign up" />
      </form>
      <Link to='/LogIn'>Log In</Link>
    </div>
  )
}

export default SignUp


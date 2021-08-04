import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h1> 404 Error </h1>
      <p> This page does not exist. </p>
      <br></br>
      <Link to="/">Go back to the home page.</Link>
    </div>
  )
}

export default NotFound

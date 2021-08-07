import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div >
      <video src='https://res.cloudinary.com/ellezique/video/upload/v1628311932/smokeloop_oubxna.mp4'autoPlay loop muted/>
      <div className="gencontainer">
        <h1> 404 Error </h1>
        <p> This page does not exist. </p>
        <br></br>
        <Link to="/" className="hyperlink">Go back to the home page.</Link>
      </div>
    </div>
  )
}

export default NotFound

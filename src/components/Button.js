import React from 'react'
import './Button.css'

//a custom button component that can be used across the site for any button with custom styling if necessary
export default function Button({text, callback, icon, propStyles}) {
  return (
    <button className='button' onClick={callback} style={propStyles}>
      {text ? text : icon}
    </button>
  )
}
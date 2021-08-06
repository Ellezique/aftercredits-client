import React from 'react'
import './Button.css'

export default function Button({text, callback, icon, propStyles}) {
  return (
    <button className='button' onClick={callback} style={propStyles}>
      {text ? text : icon}
    </button>
  )
}
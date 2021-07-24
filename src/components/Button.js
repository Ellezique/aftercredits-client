import React from 'react'
import buttonStyle from './Button.css'

export default function Button({text, callback, icon}) {
  let styling = buttonStyle

  // Handles custom styling adjustments based on name of button
  // switch(text) {
  //   case 'Create':
  //     styling = {
  //       backgroundColor: 'Chartreuse'
  //     }
  //     break
  //   case 'Edit':
  //     styling = {
  //       backgroundColor: 'Chartreuse'
  //     }
  //     break
  //   default:
  // }

  return (
    <button onClick={callback} style={styling}>
      {text ? text : icon}
    </button>
  )
}
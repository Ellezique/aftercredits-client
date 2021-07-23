import React from 'react'

export default function Button({text, callback}) {
  const styling = {}
  switch(text) {
    case "":
      styling = {

      }
      break
    default:
      styling = {

      }
  }

  return (
    <button 
      onClick={callback}
      style={styling}
    >
      {text}
    </button>
  )
}
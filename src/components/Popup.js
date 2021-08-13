import React from 'react'
import './Popup.css'

export default function Popup(props) {
  //popup used for delete confirmation
  return (
    <div className="popupContainer">
      <div className="popupBox">
        {props.content}
      </div>
    </div>
  )
}

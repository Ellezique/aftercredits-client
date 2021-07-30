import React from 'react'
import './Popup.css'

export default function Popup(props) {
  return (
    <div className="popupContainer">
      <div className="popupBox">
      {/* <span className="close-icon" onClick={props.handleClose}>x</span> */}
        {props.content}
      </div>
    </div>
  )
}

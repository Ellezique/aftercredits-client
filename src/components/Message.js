import React, { useState } from 'react'
import Button from './Button'
import './Message.css'
import Popup from './Popup'


export default function Message({message}) {
  const {username, text, date} = message
  const [editing, setEditing] = useState(false)
  const [options, setOptions] = useState(false)
  const [popupOpen, setPopupOpen] = useState(false)
  const [messageText, setMessageText] = useState(text)


  function handleChange(event){
    setMessageText(event.target.value)
  }

  return (
    <div className='MessageContainer'>
      {!editing ?
        <>
          <p className='MessageUser'>{username}</p>
          <p className='MessageText'>{messageText}</p>
          <p className='MessageDate'>{date}</p>
          <Button 
            text='Options'
            callback={() => {
              setOptions(!options)
            }}
          />
          {options &&
            <div className='OptionsContainer'>
              <Button 
                text='Edit'
                callback={() => {
                  setOptions(!options)
                  setEditing(true)
                  console.log('edit')
                }}
              />
              <Button 
                text='Delete'
                callback={() => {
                  setPopupOpen(!popupOpen)
                  console.log('delete')
                }}
              />           
            </div>
          }
          {popupOpen &&
            <Popup
              content={
                <>
                <p>Are you sure you want to Delete?</p>
                <Button 
                  text='Yes'
                  callback={() => {
                    setOptions(!options)
                    setPopupOpen(!popupOpen)
                    console.log('Yes')
                  }}
                />  
                <Button 
                  text='No'
                  callback={() => {
                    setPopupOpen(!popupOpen)
                    console.log('No')
                  }}
                />  
              </>
              }          
            />

          }
        </>
      :
        <>
          <textarea value={messageText} onChange={handleChange} />
          <Button 
            text='Save Changes'
            callback={() => {
              // PUT REQUEST TO MESSAGE TABLE

              setEditing(false)
              console.log('save')
            }}
            // icon='' grab later
          />
        </>
      }
    </div>
  )
}

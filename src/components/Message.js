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
    <div className='messagecontainer'>
      {!editing ?
        <>
          <h4 className='user'>{username}</h4>
          <p className='text'>{messageText}</p>
          <p className='date'>{date}</p>
          <div className='options'>
            <Button 
              text='Options'
              callback={() => {
                setOptions(!options)
              }}
            />
          </div>
          {options &&
            <div className='options'>
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
                  setPopupOpen(true)
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
                    // DELETE REQUEST TO MESSAGE TABLE FOR MESSAGE/:id
                    
                    setOptions(false)
                    setPopupOpen(false)
                    console.log('Yes')
                  }}
                />  
                <Button 
                  text='No'
                  callback={() => {
                    setPopupOpen(false)
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
          <div className='editButtons'>
            <Button 
              text='Save'
              callback={() => {
                // PUT REQUEST TO MESSAGE TABLE FOR MESSAGE/:id

                setEditing(false)
                console.log('save')
              }}
              // icon='' grab later
            />
            <Button 
              text='Cancel'
              callback={() => {
                // CANCEL
                setEditing(false)
                console.log('cancel')
              }}
              // icon='' grab later
            />
          </div>
        </>
      }
    </div>
  )
}

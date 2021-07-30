import React, { useState } from 'react'
import Button from './Button'
import './Message.css'


export default function Message({message}) {
  const {username, text, date} = message
  const [editing, setEditing] = useState(false)
  const [options, setOptions] = useState(false)
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
                  setOptions(!options)
                  console.log('delete')
                }}
              />           
            </div>
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

import React, { useState } from 'react'
import Button from './Button'
import Api from '../utils/Api'
import Popup from './Popup'
import { useGlobalState } from '../utils/stateContext'
import './Message.css'

export default function Message({message}) {
  const { store, dispatch } = useGlobalState()
  const { loggedInUser, messages, isAdmin } = store
  const { username, text, posted, id } = message
  const [editing, setEditing] = useState(false)
  const [options, setOptions] = useState(false)
  const [popupOpen, setPopupOpen] = useState(false)
  const [messageText, setMessageText] = useState(text)

  // updates both the client and server message with the new text
  async function updateMessage() {
    const payload = {m_text:messageText, id:id}
    const response = await Api.serverApi.messages.edit(payload)
    console.log(response)
  }

  //makes an api call to remove this message, clientside visual issue persists
  async function deleteMessage() {
    await Api.serverApi.messages.delete(id)
    const filteredMessages = messages.filter((msg => msg.id !== id))
    dispatch({type: 'setMessageDeleted', data: true})
    dispatch({type: 'setMessages', data: filteredMessages})
  }

  //handles changes to text in the textinput form
  function handleChange(event){
    setMessageText(event.target.value)
  }

  return (
    <div className='messagecontainer'>
      {!editing ?
        <>
          <h4 className='user'>{username}</h4>
          <p className='text'>{messageText}</p>
          <p className='posted'>{posted}</p>
          {/* Only the logged in user or an admin can see the options for their/all cards respectively */}
          {(loggedInUser === username || isAdmin) &&
            <div className='options'>
              <Button 
                text='Options'
                callback={() => {
                  setOptions(!options)
                }}
              />
            </div>
          }
          {options &&
            <div className='options'>
              {/* Users can only edit their own messages */}
              {loggedInUser === username &&
                <Button 
                  text='Edit'
                  callback={() => {
                    console.log(message)
                    setOptions(!options)
                    setEditing(true)
                    console.log('edit')
                  }}
                />
              }
              {/* A user can delete their own messages while admins can delete anyones messages */}
              {(loggedInUser === username || isAdmin) &&
                <Button 
                  text='Delete'
                  callback={() => {
                    setPopupOpen(true)
                    console.log('delete')
                  }}
                /> 
              }      
            </div>
          }
          {/* Allows a user to rethink whether they want to delete their message or not*/}
          {popupOpen &&
            <Popup
              content={
                <>
                <p>Are you sure you want to Delete?</p>
                <Button 
                  text='Yes'
                  callback={() => {
                    // setMessageDeleted(true)
                    deleteMessage()
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
          {/* creates an editing textinput that saves the changes made to a message and correctly sends a put request to the server */}
          <textarea value={messageText} onChange={handleChange} />
          <div className='editButtons'>
            <Button 
              text='Save'
              callback={() => {
                updateMessage()
                setEditing(false)
                console.log('save')
              }}
            />
            <Button 
              text='Cancel'
              callback={() => {
                setEditing(false)
                console.log('cancel')
              }}
            />
          </div>
        </>
      }
    </div>
  )
}

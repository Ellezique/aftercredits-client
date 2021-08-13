import React, { useState, useEffect } from 'react'
import Button from './Button'
import Api from '../utils/Api'
import Popup from './Popup'
import { useGlobalState } from '../utils/stateContext'
import './Message.css'

export default function Message({message}) {
  const { store, dispatch } = useGlobalState()
  const { loggedInUser, messages } = store
  const { username, text, posted, id } = message
  const [editing, setEditing] = useState(false)
  const [options, setOptions] = useState(false)
  const [popupOpen, setPopupOpen] = useState(false)
  const [messageText, setMessageText] = useState(text)
  const [messageDeleted, setMessageDeleted] = useState(false)

  useEffect(()=>{
    if(messageDeleted){
      deleteMessage()
      setMessageDeleted(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[messageDeleted])

  async function updateMessage() {
    const payload = {m_text:messageText, id:id}
    const response = await Api.serverApi.messages.edit(payload)
    console.log(response)
  }

  async function deleteMessage() {
    await Api.serverApi.messages.delete(id)
    dispatch({type: 'setMessages', data: messages.filter((msg => msg !== message))})
  }

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
          {loggedInUser === username &&
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
              <Button 
                text='Edit'
                callback={() => {
                  console.log(message)
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
                    setMessageDeleted(true)
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

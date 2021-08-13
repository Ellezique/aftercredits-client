import React, { useState, useEffect } from 'react'
import Message from './Message'
import Button from './Button'
import Api from './../utils/Api'
import { useGlobalState } from '../utils/stateContext'
import './Chatroom.css'

export default function Chatroom({ cardId, cardImdbId }) {
  const { store, dispatch } = useGlobalState()
  const { messages, messageDeleted } = store
  const [loadingMessages, setLoadingMessages] = useState(true)
  const [messageCreated, setMessageCreated] = useState(false)
  const [text, setText] = useState('')
  const initialFormData = {
    card_id: cardId,
    text: '',
  }
  const [formData, setFormData] = useState(initialFormData)

  //handles rerendering of chatroom depending on what state is being updated in the app
  useEffect(() => {
    if(messages.length === 0 || messageCreated === true || messageDeleted === true) {
      getMessages()
      .then((data)=>{
        console.log('getting messages')
        const messageList = data.filter(message => message.card === cardImdbId)
        dispatch({type: 'setMessages', data: messageList})
        setLoadingMessages(false)
        setMessageCreated(false)
        setText('')
        setFormData({
          ...formData,
          m_text: ''
        })
        dispatch({type: 'setMessageDeleted', data: false})
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[messageCreated, messageDeleted])

  //gets all messages, should have had backend filtering functionality but it works
  async function getMessages() {
    const response = await Api.serverApi.messages.getAll()
    return response.data
  }

  //creates a message based on the text entered in the textinput and the card it is associated with, user association is handled automatically
  async function createMessage() {
    console.log('create',formData, '\nmessages', messages)
    await Api.serverApi.messages.create(formData)
    setMessageCreated(true)
  }

  //handles changes in the textinput text field to update the state of the formData
  function handleChange(event) {
    setText(event.target.value)
    setFormData({
			...formData,
			[event.target.name]: event.target.value
		})
  }

  return (
    <div className='chatroomContainer'>
      {/* displays loading if our api call is taking longer than expected */}
      {loadingMessages ?
        <p>LOADING...</p>
      :
        <>
            {/* CREATE MESSAGES */}
            <div className='postContainer'>
              <textarea 
                id ="messagetextarea"
                name='m_text'
                placeholder="Enter your message here:"
                value={text}
                onInput={handleChange}
              />
              <Button
                text='Post'
                callback={() => {
                  console.log('post')
                  createMessage()
                }}
              />
            </div>
            <div>
              {/* RENDER MESSAGES, should rerender on changes to messages*/}
              {messages.map((message, index) => {
                return (
                  <Message key={index} message={message} />
                )
              })}
            </div>
        </>
      }
    </div>
  )
}

import React, { useState, useEffect } from 'react'
import Message from './Message'
import Button from './Button'
import Api from './../utils/Api'
import { useGlobalState } from '../utils/stateContext'
import './Chatroom.css'

export default function Chatroom({ spoilerRoom, cardId, cardImdbId }) {
  const { store, dispatch } = useGlobalState()
  const { messages, messageDeleted } = store
  const [loadingMessages, setLoadingMessages] = useState(true)
  const [messageCreated, setMessageCreated] = useState(false)
  const [text, setText] = useState('')
  const initialFormData = {
    card_id: cardId,
    m_text: text,
  }
  const [formData, setFormData] = useState(initialFormData)
  
  // const {} = messages
  // const messages = spoilerRoom
  // ? messagesList.filter(message => message.spoiler === true)
  // : messagesList.filter(message => message.spoiler === false)

  useEffect(() => {
    if(messages.length === 0 || messageCreated === true || messageDeleted === true) {
      getMessages()
      .then((data)=>{
        const messageList = data.filter(message => message.card === cardImdbId)
        dispatch({type: 'setMessages', data: messageList})
        setLoadingMessages(false)
        setMessageCreated(false)
        dispatch({type: 'setMessageDeleted', data: false})
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[messageCreated, messageDeleted])

  async function getMessages() {
    const response = await Api.serverApi.messages.getAll()
    return response.data
  }
  
  async function createMessage() {
    console.log('create',formData)
    await Api.serverApi.messages.create(formData)
    setMessageCreated(true)
  }

  function handleChange(event) {
    console.log('handle',formData)
    setText(event.target.value)
    setFormData({
			...formData,
			[event.target.name]: event.target.value
		})
  }

  return (
    <div className='chatroomContainer'>
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
                  setText('')
                }}
              />
            </div>
            <div>
              {/* RENDER MESSAGES*/}
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

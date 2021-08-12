import React, { useState, useEffect } from 'react'
import Message from './Message'
import Button from './Button'
import Api from './../utils/Api'
// import { useGlobalState } from '../utils/stateContext'
import './Chatroom.css'

export default function Chatroom({ spoilerRoom, cardId, cardImdbId }) {
  // const { store } = useGlobalState()
  // const { loggedInUser } = store
  const [messages, setMessages] = useState([])
  const [loadingMessages, setLoadingMessages] = useState(true)
  const [messageCreated, setMessageCreated] = useState(false)
  const [text, setText] = useState()
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
    if(messages.length === 0 || messageCreated === true) {
      getMessages()
      .then((data)=>{
        setMessages(data.filter(message => message.card === cardImdbId).reverse())
        setLoadingMessages(false)
        setMessageCreated(false)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[messageCreated])

  async function getMessages() {
    const response = await Api.serverApi.messages.getAll()
    return response.data
  }
  
  async function createMessage() {
    await Api.serverApi.messages.create(formData)
    setMessageCreated(true)
  }

  function handleChange(event) {
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
          {/* RENDER MESSAGES*/}
          {messages.map((message, index) => {
            return (
              <Message key={index} message={message}/>
            )
          })}
          {/* CREATE MESSAGES */}
          <div className='postContainer'>
            <textarea 
              id ="messagetextarea"
              name='m_text'
              placeholder="Enter your message here:"
              value={text}
              onChange={handleChange}
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
        </>
      }
    </div>
  )
}

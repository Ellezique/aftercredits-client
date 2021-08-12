import React, { useState } from 'react'
import Message from './Message'
import Button from './Button'
import Api from './../utils/Api'
import './Chatroom.css'

export default function Chatroom({spoilerRoom, loading, messages}) {
  // const {} = messages
  // const messages = spoilerRoom
  // ? messagesList.filter(message => message.spoiler === true)
  // : messagesList.filter(message => message.spoiler === false)

  const [text, setText] = useState('')

  return (
    <div className='chatroomContainer'>
      {loading ?
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
              placeholder="Enter your message here:"
              value={text}
              onChange={(event) => {
                setText(event.target.value)
              }}
            />
            <Button
              text='Post'
              callback={() => {
                // UPDATE MESSAGES ON BACKEND
                Api.serverApi.messages.create(text)
                console.log('post')
              }}
            />
          </div>
        </>
      }
    </div>
  )
}

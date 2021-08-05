import React, { useState } from 'react'
import Message from './Message'
import Button from './Button'
import Api from './../utils/Api'
import './Chatroom.css'

export default function Chatroom({spoilerRoom}) {
  //Commented out until we get full api integration
  // const [messages, setMessages] = useState()

  // get messages from database once api/server are implemented
  const messagesList = [
    {username: 'BigMovieBuff', text: 'I think Marvel movies are the anime of the west, change my mind', date: '10/07/2021', spoiler: false},
    {username: 'xXxAnime-fanxXx', text: 'What? They are literally nothing alike! How could you say something like that??', date: '10/07/2021', spoiler: false},
    {username: 'CinemaAndChill420', text: 'No dude, Buff totally has a point', date: '11/07/2021', spoiler: true},
    {username: 'BigMovieBuff', text: '^^ This one gets it', date: '11/07/2021', spoiler: false},
    {username: 'ICantHelpMyself', text: 'Tony Stark dies in the end, GG', date: '12/07/2021', spoiler: true},
  ]

  const messages = spoilerRoom
  ? messagesList.filter(message => message.spoiler === true)
  : messagesList.filter(message => message.spoiler === false)

  const [text, setText] = useState('')

  return (
    <div className='chatroomContainer'>
      {/* RENDER MESSAGES*/}
      {messages.map((message, index) => {
        return (
          <Message key={index} message={message}/>
        )
      })}
      {/* CREATE MESSAGES */}
      <div className='postContainer'>
        <textarea
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
    </div>
  )
}

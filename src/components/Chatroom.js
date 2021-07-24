import React from 'react'
import Message from './Message'
import './Chatroom.css'

export default function Chatroom({spoilerRoom}) {

  // need a useEffect to check if messages have been updated in the database to then call for the latest messages and add them to the render, could start with rerendering all messages but would prefer only the latest to save on resources

  // get messages from database once api/server are implemented
  const messagesList = [
    {username: 'BigMovieBuff', text: 'I think Marvel movies are the anime of the west, change my mind', date: '10/07/2021', spoiler: false},
    {username: 'xXxAnime-fanxXx', text: 'What? They are literally nothing alike! How could you say something like that??', date: '10/07/2021', spoiler: false},
    {username: 'CinemaAndChill420', text: 'No dude, Buff totally has a point', date: '11/07/2021', spoiler: true},
    {username: 'BigMovieBuff', text: '^^ This one gets it', date: '11/07/2021', spoiler: false},
    {username: 'ICantHelpMyself', text: 'Tony Stark dies in the end, GG', date: '12/07/2021', spoiler: true},
  ]

  const messages = spoilerRoom ?
    messagesList.filter(message => message.spoiler === true) :
    messagesList.filter(message => message.spoiler === false)

  return (
    <div className='ChatroomContainer'>
      {messages.map((message, index) => {
        return (
          <Message key={index} message={message}/>
        )
      })}
    </div>
  )
}

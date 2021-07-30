import React, { useState } from 'react'
import Button from '../components/Button'
import Chatroom from './Chatroom'

export default function Card({title, imgSrc, releaseDate, onClick, selected}) {
  const [chatroom, setChatroom] = useState(false)
  const [spoilerChatroom, setSpoilerChatroom] = useState(false)
  const selectedDetails = selected

  return (
    <div onClick={onClick}>
      <h1>{title}</h1>
      <img src={imgSrc} alt='movie poster'/>
      {selectedDetails &&
      <>
        <p>{releaseDate}</p>
        <Button
          text='Spoiler Chatroom'
          callback={() => {
            setSpoilerChatroom(true)
            setChatroom(false)
          }}
        />
        <Button
          text='Chatroom'
          callback={() => {
            setChatroom(true)
            setSpoilerChatroom(false)
          }}
        />
        {chatroom && !spoilerChatroom && <Chatroom />}
        {spoilerChatroom && !chatroom && <Chatroom spoilerRoom={true}/>}
      </>
      }
    </div>
  )
}

import React, { useState } from 'react'
import Button from '../components/Button'
import Chatroom from './Chatroom'

export default function Card({title, imgSrc, releaseDate, onClick}) {
  const [chatroom, setChatroom] = useState(false)
  const [spoilerChatroom, setSpoilerChatroom] = useState(false)
  const selectedCard = false

  return (
    <div onClick={onClick}>
      {!selectedCard ?
        <>
          <h1>{title}</h1>
          <img src={imgSrc} alt='movie poster'/>
        </>
        :
        <>
          <p>{releaseDate}</p>
          <Button
            text='Spoiler Chatroom'
            callback={() => setSpoilerChatroom(!spoilerChatroom)}
          />
          <Button
            text='Chatroom'
            callback={() => setChatroom(!chatroom)}
          />
          {chatroom && !spoilerChatroom && <Chatroom />}
          {spoilerChatroom && !chatroom && <Chatroom spoilerRoom={true}/>}
        </>
      }
    </div>
  )
}

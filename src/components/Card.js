import React, { useState } from 'react'
import Button from '../components/Button'
import Chatroom from './Chatroom'
import './Card.css'

export default function Card({title, imgSrc, releaseDate, onClick, selected}) {
  const [chatroom, setChatroom] = useState(false)
  const [spoilerChatroom, setSpoilerChatroom] = useState(false)
  const selectedDetails = selected

  return (
    <div className='cardContainer' onClick={onClick}>
      <h1 className='cardTitle'>{title}</h1>
      <img className='cardImage' src={imgSrc} alt='movie poster'/>
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

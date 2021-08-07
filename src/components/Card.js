import React, { useState } from 'react'
import { useGlobalState } from './../utils/stateContext'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Chatroom from './Chatroom'
import './Card.css'

export default function Card({title, imgSrc, releaseDate, onClick, selected}) {
  const [chatroom, setChatroom] = useState(false)
  const [spoilerChatroom, setSpoilerChatroom] = useState(false)
  const selectedDetails = selected
  const { store } = useGlobalState()
  const { isLoggedIn } = store

  function loggedInStatus(spoiler) {
    if(!isLoggedIn){
      <Link to='/LogIn' />
    } else if(spoiler) {
      setSpoilerChatroom(true)
      setChatroom(false)
    } else {
      setChatroom(true)
      setSpoilerChatroom(false)
    }

    // !isLoggedIn ?
    //   <Link to='/LogIn'/>
    // : spoiler ? (
    //   setSpoilerChatroom(true),
    //   setChatroom(false)
    // ) : (
    //   setChatroom(true),
    //   setSpoilerChatroom(false)
    // )
  }

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
            loggedInStatus(true)
          }}
        />
        <Button
          text='Chatroom'
          callback={() => {
            loggedInStatus(false)
          }}
        />
        {chatroom && !spoilerChatroom && <Chatroom />}
        {spoilerChatroom && !chatroom && <Chatroom spoilerRoom={true}/>}
      </>
      }
    </div>
  )
}
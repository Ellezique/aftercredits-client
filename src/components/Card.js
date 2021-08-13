import React, { useState } from 'react'
import { useGlobalState } from '../utils/stateContext'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Chatroom from './Chatroom'
import './Card.css'

export default function Card({cardId, cardImdbId, title, imgSrc, releaseDate, onClick, selected, genre, plot, actors}) {
  const [chatroom, setChatroom] = useState(false)
  const [showMore, setShowMore] = useState(false)
  // const [spoilerChatroom, setSpoilerChatroom] = useState(false)
  const { store } = useGlobalState()
  const { loggedInUser } = store

  // Will reimplement correctly if time permits
  // function room(spoiler) {
  //   // else if(spoiler) {
  //   //   setSpoilerChatroom(true)
  //   //   setChatroom(false)
  //   // } else {
  //   //   setChatroom(true)
  //   //   setSpoilerChatroom(false)
  //   // }

  //   // !isLoggedIn ?
  //   //   <Link to='/LogIn'/>
  //   // : spoiler ? (
  //   //   setSpoilerChatroom(true),
  //   //   setChatroom(false)
  //   // ) : (
  //   //   setChatroom(true),
  //   //   setSpoilerChatroom(false)
  //   // )
  // }

  return (
    <div className='cardContainer' onClick={onClick}>
      <h1 className='cardTitle'>{title}</h1>
      <img className='cardImage' src={imgSrc} alt='movie poster' />
      <div className="showMoreContainer">
        {selected &&
          <>
            {/* Conditionally renders more details about a given card if the show more button is clicked */}
            {showMore &&
              <div id="showMoreBox">
                <h4>Release date:</h4>
                <p>{releaseDate}</p>
                <h4>Genre:</h4>
                <p>{genre}</p>
                <h4>Cast: </h4>
                <p>{actors}</p>
                <h4>Description: </h4>
                <p>{plot}</p>
              </div>
            }
            {/* <Button
                  text='Spoiler Chatroom'
                  callback={() => {
                    room(true)
                  }}
                /> */}
            <Button
              text='Show More'
              callback={() => {
                setShowMore(!showMore)
              }}
            />
            {/* If user is not logged in they will be redirected to the login page */}
            <Link to={!loggedInUser ? '/LogIn' : '/'}>
              <Button
                text='Chatroom'
                callback={() => {
                  loggedInUser && setChatroom(!chatroom)
                }}
              />
            </Link>
            {/* If the chatroom button is clicked the chatroom will open */}
            {chatroom && <Chatroom cardId={cardId} cardImdbId={cardImdbId}/>}
            {/* {spoilerChatroom && !chatroom && <Chatroom spoilerRoom={true}/>} */}
          </>
        }
        </div>
    </div>
  )
}
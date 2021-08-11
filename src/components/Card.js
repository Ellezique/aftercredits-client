import React, { useState } from 'react'
import { useGlobalState } from '../utils/stateContext'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Chatroom from './Chatroom'
import Api from '../utils/Api'
import './Card.css'

export default function Card({ imdbId, title, imgSrc, releaseDate, onClick, selected, genre, plot, actors }) {
  const [chatroom, setChatroom] = useState(false)
  const [showMore, setShowMore] = useState(false)
  // const [spoilerChatroom, setSpoilerChatroom] = useState(false)
  const { store } = useGlobalState()
  const { isLoggedIn } = store

  function loggedInStatus(spoiler) {
    if (!isLoggedIn) {
      <Link to='/LogIn' />
    }
    // else if(spoiler) {
    //   setSpoilerChatroom(true)
    //   setChatroom(false)
    // } else {
    //   setChatroom(true)
    //   setSpoilerChatroom(false)
    // }

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

  imdbId && getCardId()

  async function getCardId() {
    const cardId = await Api.serverApi.cards.getOne(imdbId)
    getMessagesByCardId(cardId)
  }

  async function getMessagesByCardId(cardId) {

  }

  return (
    <div className='cardContainer' onClick={onClick}>
      <h1 className='cardTitle'>{title}</h1>
      <img className='cardImage' src={imgSrc} alt='movie poster' />
      <div className="showMoreContainer">
        {selected &&
          <>
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
                    loggedInStatus(true)
                  }}
                /> */}
            <Button
              text='Show More'
              callback={() => {
                loggedInStatus(false)
                setShowMore(!showMore)
              }}
            />
            <Button
              text='Chatroom'
              callback={() => {
                loggedInStatus(false)
                setChatroom(!chatroom)
              }}
            />
            {chatroom && <Chatroom />}
            {/* {spoilerChatroom && !chatroom && <Chatroom spoilerRoom={true}/>} */}
          </>
        }
      </div>
    </div>
  )
}
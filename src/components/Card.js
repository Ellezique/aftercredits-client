import React, { useState, useEffect } from 'react'
import { useGlobalState } from '../utils/stateContext'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Chatroom from './Chatroom'
import Api from '../utils/Api'
import './Card.css'

export default function Card({cardId, title, imgSrc, releaseDate, onClick, selected, genre, plot, actors}) {
  const [chatroom, setChatroom] = useState(false)
  const [showMore, setShowMore] = useState(false)
  const [messages, setMessages] = useState([])
  // const [spoilerChatroom, setSpoilerChatroom] = useState(false)
  const [loadingMessages, setLoadingMessages] = useState(true)
  const { store } = useGlobalState()
  const { loggedInUser } = store

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

  useEffect(() => {
    if(messages.length === 0) {
      getMessages()
      .then((data)=>{
        setMessages(data.filter(message=> message.card === cardId))
        setLoadingMessages(false)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  async function getMessages() {
    const response = await Api.serverApi.messages.getAll()
    return response.data
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
                    room(true)
                  }}
                /> */}
            <Button
              text='Show More'
              callback={() => {
                setShowMore(!showMore)
              }}
            />
            <Link to={!loggedInUser ? '/LogIn' : '/'}>
            <Button
              text='Chatroom'
              callback={() => {
                loggedInUser && setChatroom(!chatroom)
              }}
            />
            </Link>
            {/* If chatroom open, feed chatroom the filtered messages */}
            {chatroom && <Chatroom loading={loadingMessages} messages={messages}/>}
            {/* {spoilerChatroom && !chatroom && <Chatroom spoilerRoom={true}/>} */}
          </>
        }
        </div>
    </div>
  )
}
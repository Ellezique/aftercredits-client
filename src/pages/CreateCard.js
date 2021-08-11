import React, { useState } from 'react'
import Button from './../components/Button'
import Api from './../utils/Api'
import { Link } from 'react-router-dom'

export default function CreateCard() {
  const [cardId, setCardId] = useState('')

  return (
    <>
      <video src='https://res.cloudinary.com/ellezique/video/upload/v1628311932/smokeloop_oubxna.mp4' autoPlay loop muted />
      <div className='gencontainer'>
        <h1>New Movie/Series Card</h1>
        <h3>Go to <a href='https://www.imdb.com/' className="hyperlink" target="_blank" rel="noreferrer">Internet Movie Database</a> and search for the movie/series you are looking for using IMDB's search tool shown below:</h3>
        <a href='https://www.imdb.com/' target="_blank" rel="noreferrer">
          <img src='./../../images/imdbsearch.PNG' alt='IMDB Page'/>
        </a>
        <br></br>
        <div className="imdbcontainer">
          <h3>When on your chosen movie/series page, look at the url at the top of the browser and extract the id (Starts with tt) from the url.</h3>
          <a href='https://www.imdb.com/' target="_blank" rel="noreferrer">
            <img src='./../../images/ttid.PNG' alt='Url Link Showing id'/>
          </a>
        </div>
        <br></br>
        <div className="imdbcontainer">
          <p>Enter the tt id below:</p>
          <textarea
            placeholder="tt0111161"
            value={cardId}
            onChange={(event) => {
              setCardId(event.target.value)
            }}
          />
        </div>
        <Link to='/' >
          <Button
            text='Create New Card'
            callback={() => {
              // ADD CARD TO BACKEND
              Api.serverApi.cards.create({ imdb_id: cardId })
              console.log('new card, what do you think?')
            }}
          />
        </Link>
      </div>
    </>
  )
}

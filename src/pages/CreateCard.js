import React, { useState } from 'react'
import Button from './../components/Button'
import Api from './../utils/Api'

export default function CreateCard() {
  const [cardId, setCardId] = useState('')

  return (
    <div className='createCardContainer'>
      <h1>New Movie/Series Card</h1>
      <p>Go to <a href='https://www.imdb.com/'>IMDB</a> and search for the movie/series you are looking for using IMDB's search tool shown below.</p>
      <img src='./../../images/IMDB.png' alt='IMDB Page'/>
      <p>When on your chosen movie/series page, look at the url at the top of the browser and extract the id (Starts with tt) from the url.</p>
      <img src='./../../images/tt_id.png' alt='Url Link'/>
      <p>Enter the tt id below:</p>
      <textarea
          value={cardId}
          onChange={(event) => {
            setCardId(event.target.value)
          }}
        />
      <Button
        text='Create New Card'
        callback={() => {
          // ADD CARD TO BACKEND
          Api.serverApi.message.create(cardId)
          console.log('new card, what do you think?')
        }}
      />
    </div>
  )
}

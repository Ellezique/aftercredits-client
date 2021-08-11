import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import Api from '../utils/Api'
import './Home.css'

export default function Home() {
  const [cardList] = useState([])
  const [isSelected, setIsSelected] = useState(false)
  const [selectedCard, setSelectedCard] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getCardIds()
  })

  async function getCardIds() {
    // GET IDS FROM SERVER
    const cardIds = await Api.serverApi.cards.getAll()
    // GET MOVIE DETAILS FROM MOVIE API
    await Promise.all(
      cardIds.data.map(async(card)=> {
        const response = await Api.movieApi.movies.getDetails({i: card.imdb_id})
        cardList.push(response.data)
      })
    )
    setLoading(false)
  }

  function handleClick(card) {
    //hide the other cards
    setIsSelected(true)
    //Put selected card's data into state to be used in render
    setSelectedCard(card)
  }

  return (
    <div >
      <video src='https://res.cloudinary.com/ellezique/video/upload/v1628311932/smokeloop_oubxna.mp4
'autoPlay loop muted/>
      <div className="homecontainer">
      {loading ?
        <p>LOADING...</p>
      :  // ALL CARDS
        <>
          {!isSelected ?
            <>
              <h1>Choose a movie/series</h1>
              <p>Discussions and chatter after the credits roll.</p>
              <Link to='/CreateCard'>
                <Button onClick={() => console.log(cardList)}
                  text='Create Card'
                />
              </Link>
              <div className='cardsContainer'>
                {cardList.map((card, index) => {
                  const { Title, Poster } = card
                  return (
                    <Card key={index} title={Title} imgSrc={Poster} onClick={() => handleClick(card)} />
                  )
                })}
              </div>  
            </>
            :  // SELECTED 
            <Card title={selectedCard.Title} imgSrc={selectedCard.Poster} releaseDate={selectedCard.Released} selected={true} />
          }
        </>
      }
      </div>
    </div>
  )
}
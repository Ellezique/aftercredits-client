import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import Api from '../utils/Api'
import { useGlobalState } from '../utils/stateContext'
import './Home.css'

export default function Home() {
  const { store, dispatch } = useGlobalState()
  const { cards, isAdmin } = store
  const [cardsData, setCardsData] = useState([])
  const [cardId, setCardId] = useState()
  const [cardImdbId, setCardImdbId] = useState()
  const [isSelected, setIsSelected] = useState(false)
  const [selectedCard, setSelectedCard] = useState(null)
  const [loading, setLoading] = useState(true)
  const [admin, setAdmin] = useState(false)

  //Handles order of calls for necessary data needed to run the applications features
  useEffect(() => {
    if(cardsData.length === 0){
      getCardsData()
    }
    if(cardsData.length > 0 && cards.length === 0) {
      getCards()
    }
    if(cards.length > 0) {
      setLoading(false)
    }
    if(isAdmin !== null) {
      setAdmin(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[cards, cardsData, isAdmin])
  
  //Retrieves imdb ids from our server backend
  async function getCardsData() {
    const cardIds = await Api.serverApi.cards.getAll()
    setCardsData(cardIds.data)
  }

  //Retrieves movie details based on the above imdb ids
  async function getCards() {
    const responses = await Promise.all(
      cardsData.map(async(card)=> {
        const response = await Api.movieApi.movies.getDetails({i: card.imdb_id})
        return response
      })
    )
    dispatch({type: 'setCards', data: responses})
  }
  
  //Will run some functions if a card has been clicked
  function selectCard(card) {
    //Put selected card's data into state to be used in render
    setSelectedCard(card)
    //hide the other cards
    setIsSelected(true)
    console.log('card', card)
    setCardImdbId(card.imdbID)
    getCardId(card)
  }

  //Looks for the backend card id of the currently selected card
  function getCardId(card) {
    setCardId(cardsData.filter(carddata => carddata.imdb_id === card.imdbID)[0].id)
  }

  return (
    <div >
      <video src='https://res.cloudinary.com/ellezique/video/upload/v1628311932/smokeloop_oubxna.mp4
'autoPlay loop muted/>
      <div className="homecontainer">
      {/* will display if awaiting async functions to complete so the cards can be rendered with the necessary data */}
      {loading ?
        <p>LOADING...</p>
      :  // ALL CARDS
        <>
          {/* Will display all cards if none have been selected */}
          {!isSelected ?
            <>
              <h1>Choose a movie/series</h1>
              <p>Discussions and chatter after the credits roll.</p>
              {/* Only admins can create new cards */}
              {admin &&
                <Link to='/CreateCard'>
                  <Button
                    text='Create Card'
                    callback={()=> dispatch({type: 'setCardsData', data: cardsData})}
                  />
                </Link>
              }
              {/* Creates the full list of available cards that were retrieved from the server */}
              <div className='cardsContainer'>
                {cards.map((card, index) => {
                  const { Title, Poster } = card.data
                  return (
                    <Card key={index} title={Title} imgSrc={Poster} onClick={() => selectCard(card.data)} />
                  )
                })}
              </div>  
            </>
            :  // SELECTED CARD
            <Card
              cardId={cardId}
              cardImdbId={cardImdbId}
              title={selectedCard.Title}
              imgSrc={selectedCard.Poster}
              releaseDate={selectedCard.Released}
              selected={true}
              genre={selectedCard.Genre}
              plot={selectedCard.Plot}
              actors={selectedCard.Actors}
            />
          }
        </>
      }
      </div>
    </div>
  )
}
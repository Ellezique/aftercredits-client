import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import Api from '../utils/Api'
import { useGlobalState } from '../utils/stateContext'
import './Home.css'

export default function Home() {
  const { store, dispatch } = useGlobalState()
  const { cards } = store
  const [cardsData, setCardsData] = useState([])
  const [cardId, setCardId] = useState()
  const [isSelected, setIsSelected] = useState(false)
  const [selectedCard, setSelectedCard] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if(cardsData.length === 0){
      getCardsData()
    }
    if(cardsData.length > 0 && cards.length === 0) {
      getCards()
    }
    if(cards.length > 0) {
      setLoading(false)
      // dispatch({type: 'loading', data: false})
    }
    if(selectedCard) {
      console.log('yes it works here too')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[cards, cardsData])
  
  async function getCardsData() {
    const cardIds = await Api.serverApi.cards.getAll()
    setCardsData(cardIds.data)
    // dispatch({type: 'setCardsData', data: cardIds.data})
  }

  async function getCards() {
    const responses = await Promise.all(
      cardsData.map(async(card)=> {
        const response = await Api.movieApi.movies.getDetails({i: card.imdb_id})
        return response
      })
    )
    dispatch({type: 'setCards', data: responses})
  }
  
  function selectCard(card) {
    //Put selected card's data into state to be used in render
    setSelectedCard(card)
    //hide the other cards
    setIsSelected(true)
    getCardId(card)
  }

  function getCardId(card) {
    setCardId(cardsData.filter(carddata => carddata.imdb_id === card.imdbID)[0].id)
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
                <Button
                  text='Create Card'
                />
              </Link>
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
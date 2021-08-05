import React, { useState } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
// import Api from '../utils/Api'
import './Home.css'

export default function Home() {
  const [isSelected, setIsSelected] = useState(false)
  const [selectedCard, setSelectedCard] = useState(null)

  const cards = [
    {
      id: 'tt4154796',
      data: {
        title: 'Avengers Endgame',
        imgSrc: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
        releaseDate: '01/03/2021'
      }
    },
    {
      id: 'tt4154796',
      data: {
        title: 'Super Dooper',
        imgSrc: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
        releaseDate: '20/12/2010'
      }
    },
    {
      id: 'tt4154796',
      data: {
        title: 'Lord of the Rings',
        imgSrc: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
        releaseDate: '10/06/2000'
      }
    }
  ]

  function handleClick(card) {
    console.log(card)
    //hide the other cards
    setIsSelected(!isSelected)
    //call new fetch for specific card details later
    //give selected card access to it's data
    setSelectedCard(card.data)
  }

  return (
    <div>
      

      {/* FETCH 2 IDs FROM BACKEND AND PASS TO MOVIE FETCH */}
      {/* PUT MOVIE FETCH RESPONSE INTO CARDS AND DISPLAY ALL */}
      {/* DISPLAY ONLY TITLE AND IMAGE ON EACH CARD */}
      {/* CHANGE TO SINGLE CARD WITH EXTENDED DATA ONCLICK (PROBABLY SECOND FETCH) */}
      {/* INCLUDE LOADING SCREEN LATER */}

      {!isSelected ?
        // ALL CARDS
        <>
          <h1>HOME PAGE</h1>
          <div className='cardsContainer'>
            {cards.map((card, index) => {
              const { title, imgSrc } = card.data
              return (
                  <Card key={index} title={title} imgSrc={imgSrc} onClick={() => handleClick(card)} />
              )
            })}
          </div>
          <Link to='/CreateCard'>
            <Button
              text='Create Card'
            />
          </Link>
        </>
        :
        // SELECTED CARD
        <Card title={selectedCard.title} imgSrc={selectedCard.imgSrc} releaseDate={selectedCard.releaseDate} selected={true} />
      }
    </div>
  )
}
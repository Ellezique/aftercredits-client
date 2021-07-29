import React, { useState } from 'react'
import axios from 'axios'
import Card from '../components/Card'

export default function Home() {
  const [isSelected, setIsSelected] = useState(false)

  // const API_KEY = process.env.REACT_APP_MOVIE_API_KEY
  // const API_URL = `https://movie-database-imdb-alternative.p.rapidapi.com/`
  // const options = {
  //   method: 'GET',
  //   url: API_URL,
  //   params: {i: 'tt4154796', r: 'json'},
  //   headers: {
  //     'x-rapidapi-key': API_KEY,
  //     'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com'
  //   }
  // }
  // axios.request(options).then(function (response) {
  //   console.log(response.data)
  // }).catch(function (error) {
  //   console.error(error)
  // })

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
    },
    
  ]

  function selectedCard({title, imgSrc, releaseDate}) {
    <Card title={title} imgSrc={imgSrc} releaseDate={releaseDate}/>
  }

  function handleClick(card) {
    console.log(card)
    setIsSelected(!isSelected)
    //call new fetch for specific card details later
    selectedCard(card.data)
  }

  

  return (
    <div>
      <h1>HOME PAGE</h1>
      
      {/* FETCH 2 IDs FROM BACKEND AND PLACE IN ARRAY */}
      {/* ITERATE OVER IDs ARRAY AND SEND 2 IDs TO MOVIE API */}
      {/* PUT RETURNED DATA INTO A CARD AND DISPLAY ALL CARDS */}
      {/* DISPLAY ONLY TITLE AND IMAGE ON EACH CARD */}
      {/* CHANGE TO SINGLE CARD WITH EXTENDED DATA ONCLICK */}

      {!isSelected ?
        // ALL CARDS
        cards.map((card, index) => {
          const {title, imgSrc} = card.data
          return (
            <Card key={index} title={title} imgSrc={imgSrc} onClick={() => handleClick(card)}/>
          )
        })
        :
        // SELECTED CARD
        <Card title={"Lol"} imgSrc={''} releaseDate={'10/10/1010'}/>
      }
    </div>
  )
}
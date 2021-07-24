import React from 'react'

function Home() {

  //calls api component to fetch ids from our database
  const getMediaDetails = async () => {
    try {
      //Destructures data from response
      const { data } = await api.post('', {
        
      })
      console.log(data)
        // localStorage.setItem('jwt', data.jwt)
        
    } catch (error) {
      console.log("Error: " + error.message)
    }
  }


  return (
    <div>
      {getIds()}
      <h1>HOME PAGE</h1>
    </div>
  )
}

export default Home

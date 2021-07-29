import React from 'react'
import Message from './Message'
import './Chatroom.css'

export default function Chatroom({spoilerRoom}) {
  //Commented out until we get full api integration
  // const [messages, setMessages] = useState()

  // useEffect(() => {
  //   api.get("/messages")
  //   .then(({ data }) => setMessages(data))
  //   .catch(({ message }) => setErrorMessage(`Error: ${message}`))
  // }, [setMessages])

  

  // const deleteMessage = async (id, index) => {
  //   try {
  //     // DELETE request to backend with id
  //     await api.delete(`/messages/${id}`);
  //     // remove message from the react state
  //     dispatch({type: 'removeMessage', payload: id})
  //   } catch ({ message }) {
  //     setErrorMessage(message)
  //   }
  // }


  // get messages from database once api/server are implemented
  const messagesList = [
    {username: 'BigMovieBuff', text: 'I think Marvel movies are the anime of the west, change my mind', date: '10/07/2021', spoiler: false},
    {username: 'xXxAnime-fanxXx', text: 'What? They are literally nothing alike! How could you say something like that??', date: '10/07/2021', spoiler: false},
    {username: 'CinemaAndChill420', text: 'No dude, Buff totally has a point', date: '11/07/2021', spoiler: true},
    {username: 'BigMovieBuff', text: '^^ This one gets it', date: '11/07/2021', spoiler: false},
    {username: 'ICantHelpMyself', text: 'Tony Stark dies in the end, GG', date: '12/07/2021', spoiler: true},
  ]

  //Will change this into a get request that filters which messages to return/render
  const messages = spoilerRoom ?
    messagesList.filter(message => message.spoiler === true) :
    messagesList.filter(message => message.spoiler === false)

  return (
    <div className='ChatroomContainer'>
      {/* Renders Messages after they have been filtered above */}
      {messages.map((message, index) => {
        return (
          <Message key={index} message={message}/>
        )
      })}
    </div>
  )
}

import React, { useState } from 'react'
import Button from '../components/Button'
import Chatroom from '../components/Chatroom'

function Home() {
  const [chatroom, setChatroom] = useState(false)
  const [spoilerChatroom, setSpoilerChatroom] = useState(false)

  return (
    <div>
      <h1>HOME PAGE</h1>
      <Button
        text='Spoiler Chatroom'
        callback={() => setSpoilerChatroom(!spoilerChatroom)}
      />
      <Button
        text='Chatroom'
        callback={() => setChatroom(!chatroom)}
      />
      {chatroom && !spoilerChatroom && <Chatroom />}
      {spoilerChatroom && !chatroom && <Chatroom spoilerRoom={true}/>}
    </div>
  )
}

export default Home

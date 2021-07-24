import React from 'react'

export default function Cards() {
  const [chatroom, setChatroom] = useState(false)
  const [spoilerChatroom, setSpoilerChatroom] = useState(false)




  return (
    <div>
      






      {/* Single Card Chatroom Stuff */}
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

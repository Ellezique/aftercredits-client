import React from 'react'
import Button from './Button'


export default function Message({username, text, date}) {
  return (
    <div className='MessageContainer'>
      <p className='MessageUser'>{username}</p>
      <p className='MessageText'>{text}</p>
      <p className='MessageDate'>{date}</p>
      <Button 
        text='Edit'
        callback={} // implement edit functionality
        // icon='' grab later
      />
    </div>
  )
}

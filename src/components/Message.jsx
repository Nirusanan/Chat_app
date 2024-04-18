import React from 'react'

export default function Message() {
  return (
    <div className='message sendMessage'>
      <div className="messageInfo">
        <img src='https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
        <span> just now </span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src='https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
      </div>
    </div>
  )
}

import React from 'react'

export default function Search() {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type='text' placeholder='Find user'/>
      </div>
      <div className="userChat">
        <img src='https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
        <div className="userChatInfo">
          <span>
            Niru
          </span>
        </div>
      </div>
    </div>
  )
}

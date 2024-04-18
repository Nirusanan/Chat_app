import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar'>
      <span className='logo'>Fast Chat</span>
      <div className='user'>
        <img src='https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
        <span>Niru</span>
        <button>Logout</button>

      </div>
    </div>
  )
}

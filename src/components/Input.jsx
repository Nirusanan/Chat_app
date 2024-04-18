import React from 'react';
import Link from '../img/link.png';
import AddImg from '../img/addImage.png';
 
export default function Input() {
  return (
    <div className='input'>
      <input type='text' placeholder='Type something...'/>
      <div className='send'>
        <img src={Link} alt='' />
        <input type='file' style={{display: "none"}} id='file'/>
        <label htmlFor='file'>
          <img src={AddImg} alt='' />
        </label>
        <button>send</button>
      </div>
    </div>
  )
}

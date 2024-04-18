import React from 'react';
import Add from '../img/add.png';
import Cam from '../img/videocamera.png';
import More from '../img/more.png';
import Messages from './Messages';
import Input from './Input';


export default function Chat() {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Niru</span>
        <div className="chatIcons">
          <img src={Cam} alt='' title='camera'/>
          <img src={Add} alt='' title='add'/>
          <img src={More} alt='' title='more'/>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
    
  )
}

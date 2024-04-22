import React, { useContext } from 'react';
import Add from '../img/add.png';
import Cam from '../img/videocamera.png';
import More from '../img/more.png';
import Messages from './Messages';
import Input from './Input';
import { ChatContext } from '../context/ChatContext';


export default function Chat() {
  const { data } = useContext(ChatContext);
  console.log(data);
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>{data.user.displayName}</span>
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

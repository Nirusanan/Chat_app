import React, { useContext, useEffect, useState } from 'react'
import Message from './Message'
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { ChatContext } from '../context/ChatContext';

export default function Messages() {
  const [messages, setMessages]  = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() =>{
    const unSub = onSnapshot(doc(db, "chats", data.chatId ), (doc)=>{
      doc.exists() && setMessages(doc.data().messages)
    })

   return () =>{
    unSub();
   }
  }, [data.chatId]);


  return (
    <div className='messages'>
      {messages.map(mess => (
        <Message message= {mess} key={mess.id}/>
      ))}
    </div>
  )
}

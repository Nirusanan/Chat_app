import React, { useContext, useState } from 'react';
import { collection, getDocs, query, where, doc, setDoc, getDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../firebase';
import { AuthContext } from '../context/AuthContext';

export default function Search() {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", userName)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    const combinedID = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, 'chats', combinedID));

      if (!res.exists()) {
        // create a chat in chats collection
        await setDoc(doc(db, 'chats', combinedID), { messages: [] });

        // create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedID + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL
          },
          [combinedID + ".date"]: serverTimestamp()
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedID + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL
          },
          [combinedID + ".date"]: serverTimestamp()
        });

      }
    } catch (err) {}

    setUser(null);
    setUserName('');
  };

  return (
    <div className='search'>
      <div className="searchForm">
        <input type='text' placeholder='Find a user' onKeyDown={handleKey} onChange={e => setUserName(e.target.value)} value={userName}/>
      </div>
      {err && <span>User not found</span>}

      {user && <div className="userChat" onClick={handleSelect}>
        <img src={user.photoURL} alt='' />
        <div className="userChatInfo">
          <span>
            {user.displayName}
          </span>
        </div>
      </div>}

    </div>
  )
}

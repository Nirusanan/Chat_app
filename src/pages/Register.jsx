import React, { useState } from 'react';
import Add from "../img/addAvator.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from '../firebase';
import { ref } from "firebase/storage";
import { getStorage, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate, Link } from 'react-router-dom';

export default function Register() {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const userName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, userName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setError(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName: userName,
              photoURL : downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName: userName,
              email,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate('/');
          });
        }
      );

    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>Fast Chat</span>
        <span className='title'>Register</span>

        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Username' />
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <input style={{ display: "none" }} type='file' id='file' />
          <label htmlFor='file'>
            <img src={Add} alt="" />
            <span> Add an avatar</span>
          </label>
          <button>Sign up</button>
          {error && <span>Something went wrong</span>}
        </form>
        <p>You have an account? <Link to="/login"> Login </Link></p>

      </div>
    </div>
  )
}

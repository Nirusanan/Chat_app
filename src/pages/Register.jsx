import React from 'react';
import Add from "../img/addAvator.png";

export default function Register() {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>Fast Chat</span>
        <span className='title'>Register</span>

        <form>
            <input type='text' placeholder='Username'/>
            <input type='email' placeholder='Email'/>
            <input type='password' placeholder='Password'/>
            <input style={{display: "none"}} type='file' id='file'/>
            <label htmlFor='file'>
                <img src={Add} alt="" />
                <span> Add an avatar</span>
            </label>
            <button>Sign up</button>
        </form>
        <p>You have an account? Login</p>

      </div>
    </div>
  )
}

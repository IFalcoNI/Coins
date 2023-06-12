import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom'
import './Styles/SignForm/Sign.css'
import { MainState } from '../MainContext';
export default function SignIn() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { setUser } = MainState()
  const [isSignedIn, setIsSignedIn] = useState(false)

  const sendUserInfo = async () => {
    await axios.post('https://coinmetricserver.onrender.com/signin', {
      email: email,
      password: password,
    }).then(res => {
      if (res.data.token) {
        console.log(res.data);
        setUser(res.data.user)
        localStorage.setItem('token', res.data.token)
        setIsSignedIn(true)
      } else {
        console.log('Not logged in');
      }
    })
  }
  return (
    !isSignedIn ?
      <div className='SignForm'>
        <h2>Sign In</h2>
        {/* <div className="username">
          <input className='sign-input' onChange={e => {
            setUsername(e.target.value)
          }} type="name" placeholder='username' />
        </div> */}
        <div className="email">
          <input className='sign-input' onChange={e => {
            setEmail(e.target.value)
          }} type='email' placeholder='email' />
        </div>
        <div className="password">
          <input className='sign-input' onChange={e => {
            setPassword(e.target.value)
          }} type="password" placeholder='password' />
        </div>

        <div className='link'> Do not have an account? <Link to={'/signup'}>Sign up</Link></div>
        <button className='sign-button' onClick={sendUserInfo}>Send</button>
      </div> : <Navigate to='/' />
  )
}

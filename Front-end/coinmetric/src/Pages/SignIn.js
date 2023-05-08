import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import '../Styles/SignForm/SignIn.css'
export default function SignIn() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const sendUserInfo = () => {
    axios.post('http://localhost:3003/signin', {
      username: username,
      email: email,
      password: password,
    }).then(res => {
      if(res.data === 'success'){
        alert('Logged In')
      } else{
        console.log('Not logged in');
      }
    })
  }
  return (
    <div className='SignForm'>
      <h2>Sign In</h2>
      <div className="username">
        <input className='signin-input' onChange={e => {
          setUsername(e.target.value)
        }} type="text" placeholder='username' />
      </div>
      <div className="email">
        <input className='signin-input' onChange={e => {
          setEmail(e.target.value)
        }}  type='email' placeholder='email' />
      </div>
      <div className="password">
        <input className='signin-input' onChange={e => {
          setPassword(e.target.value)
        }} type="password" placeholder='password' />
      </div>

      <div className='link'> Do not have an account? <Link to={'/signup'}>Sign up</Link></div>
      <button className='signin-button' onClick={sendUserInfo}>Send</button>
    </div>
  )
}

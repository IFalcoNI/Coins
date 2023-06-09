import React, { useState } from 'react'
import axios from 'axios'
import { Link, Navigate } from 'react-router-dom'
import './Styles/SignForm/Sign.css'

export default function SignUp() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isSignedUp, setIsSignedUp] = useState(false)

    const sendUserInfo = () => {
        axios.post('https://coinmetricserver.onrender.com/signup', {
            username: username,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            watchlist: {watchlist:[]},
            portfolio: {portfolio:[]}
        }).then(res => {
            if (res.data === 'newUser') {
                setIsSignedUp(true)
                alert('signed up')
            } else {
                console.log('Not signed up');
            }
            console.log(res.data);
        })
    }

    return (
        !isSignedUp ?
            <div className='SignForm'>
                <h2>Sign up</h2>
                <div className="username">
                    <input className='sign-input' onChange={e => {
                        setUsername(e.target.value)
                    }} type="text" placeholder='username' />
                </div>
                <div className="email">
                    <input className='sign-input' onChange={e => {
                        setEmail(e.target.value)
                    }} type="email" placeholder='email' />
                </div>
                <div className="password">
                    <input className='sign-input' onChange={e => {
                        setPassword(e.target.value)
                    }} type="password" placeholder='password' />
                </div>
                <div className="password">
                    {/* <h4>confirm password</h4> */}
                    <input className='sign-input' onChange={e => {
                        setConfirmPassword(e.target.value)
                    }} type="password" placeholder='confirm password' />
                </div>
                <div className='link'>Already have an account? <Link to={'/signin'}>Sign in</Link></div>
                <button className='sign-button' onClick={sendUserInfo}>Send</button>
            </div> : <Navigate to='/signin' />
    )
}

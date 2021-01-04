import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import { useAuth } from '../hooks/use-auth';

export default function Signup() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const auth = useAuth();

  const handleSignup = (e) => {
    e.preventDefault()
    auth.signup(username, password)
    console.log(auth.user)
  }

  useEffect(() => {
    console.log(auth.localStorageUser)
  }, [])

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
        </ul>
      </nav>
      <form onSubmit={handleSignup} >
        <input type='text' defaultValue='' placeholder="username" onChange={e => setUserName(e.target.value)} />
        <input type='password' defaultValue='' placeholder="password" onChange={e => setPassword(e.target.value)} />
        <button type='submit' onClick={handleSignup} >submit</button>
      </form>
    </>
  )
}
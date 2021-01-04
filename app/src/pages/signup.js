import React, { useState } from 'react';

import { useAuth } from '../hooks/use-auth';

export default function Signup() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const auth = useAuth();

  const handleSignup = (e) => {
    e.preventDefault()
    auth.signup(username, password)
  }

  return (
    <>
      <form onSubmit={handleSignup} >
        <input type='text' defaultValue='' placeholder="username" onChange={e => setUserName(e.target.value)} />
        <input type='password' defaultValue='' placeholder="password" onChange={e => setPassword(e.target.value)} />
        <button type='submit' onClick={handleSignup} >submit</button>
      </form>
    </>
  )
}
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../hooks/use-auth';
import { Navigation } from '../components';

export default function Signin() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const auth = useAuth();

  const handleSignin = (e) => {
    e.preventDefault()
    auth.signin(username, password)
  }

  return (
    <>
      <Navigation>
        <Link to='/signup'>Sign up</Link>
      </Navigation>
      <form onSubmit={handleSignin} >
        <input type='text' defaultValue='' placeholder="username" onChange={e => setUserName(e.target.value)} />
        <input type='password' defaultValue='' placeholder="password" onChange={e => setPassword(e.target.value)} />
        <button type='submit' onClick={handleSignin} >submit</button>
      </form>
    </>
  )
}
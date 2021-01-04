import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../hooks/use-auth';
import { Navigation, Layout, AnimatedTitle, Typography } from '../components';

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
      <Navigation />
      <Layout maxFreezeLarge >
        <Layout.Row alignCenter hasPadding rowReverse >
          <Layout.Col size='1'>
            <AnimatedTitle>Real-time Team Collaboration</AnimatedTitle>
            <Typography.BodyLarge>Sign up to get started.</Typography.BodyLarge>
            <form onSubmit={handleSignup} >
              <input type='text' defaultValue='' placeholder="username" onChange={e => setUserName(e.target.value)} />
              <input type='password' defaultValue='' placeholder="password" onChange={e => setPassword(e.target.value)} />
              <button type='submit' onClick={handleSignup} >submit</button>
            </form>
            <Typography.BodySmall>Already have an account? <Link to='/signin'>Sign in</Link></Typography.BodySmall>
          </Layout.Col>
          <Layout.Col size='2'>
            <img width="100%" src="/SignUp.png" alt="sign up" />
          </Layout.Col>
        </Layout.Row>
      </Layout>

    </>
  )
}
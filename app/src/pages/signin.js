import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../hooks/use-auth';
import { Navigation, Layout, AnimatedTitle, Typography, Input, Button } from '../components';

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
      <Navigation />
      <Layout maxFreezeLarge >
        <Layout.Row alignCenter hasPadding rowReverse h100 >
          <Layout.Col size='1'>
            <AnimatedTitle>Real-time Team Collaboration</AnimatedTitle>
            <Typography.BodyLarge>Sign in to get started.</Typography.BodyLarge>
            <form style={{ margin: '2.3rem 0' }} onSubmit={handleSignin} >
              <div style={{ marginBottom: '3.6rem' }} >
                <Input
                  label="Username"
                  name='username'
                  type='text'
                  defaultValue=''
                  placeholder="Username"
                  onChange={e => setUserName(e.target.value)}
                />
                <Input
                  label="Password"
                  name='password'
                  type='password'
                  defaultValue=''
                  placeholder="••••••••"
                  onChange={e => setPassword(e.target.value)}
                  style={{ marginBottom: '1.3rem' }}
                />
                <Typography.BodySmall>Don't have an account? <Link to='/signup'>Sign up</Link></Typography.BodySmall>
              </div>
              <Button.Action type='submit' onClick={handleSignin} >Sign In</Button.Action>
            </form>
          </Layout.Col>
          <Layout.Col size='2'>
            <img width="100%" src="/SignIn.png" alt="sign ip" />
          </Layout.Col>
        </Layout.Row>
      </Layout>
    </>
  )
}
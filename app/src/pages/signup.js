import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../hooks/use-auth';
import { Navigation, Layout, AnimatedTitle, Typography, Input, Button } from '../components';

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
        <Layout.Row alignCenter hasPadding rowReverse h100 >
          <Layout.Col size='1'>
            <AnimatedTitle>Real-time Team Collaboration</AnimatedTitle>
            <Typography.BodyLarge>Sign up to get started.</Typography.BodyLarge>
            <form style={{ margin: '2.3rem 0' }} onSubmit={handleSignup} >
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
                <Typography.BodySmall>Already have an account? <Link to='/signin'>Sign in</Link></Typography.BodySmall>
              </div>
              <Button.Action type='submit' onClick={handleSignup} >Sign Up</Button.Action>
            </form>
          </Layout.Col>
          <Layout.Col size='2'>
            <img width="100%" src="/SignUp.png" alt="sign up" />
          </Layout.Col>
        </Layout.Row>
      </Layout>
    </>
  )
}
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { useAuth } from '../hooks/use-auth';
import { Navigation, Layout, AnimatedTitle, Typography, Input, Button, Flashbag } from '../components';

import { motion } from 'framer-motion';

export default function Signin() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const auth = useAuth();

  const handleSignin = (e) => {
    e.preventDefault()
    // Use auth context signin method
    auth.signin(username, password)
  }


  // If the user is already online, redirect to Chat
  return (
    <>
    { auth.localStorageUser && <Redirect to="/chat" /> }
      <Navigation />
      <Layout maxFreezeLarge >
        <Layout.Row alignCenter hasPadding rowReverse h100 >
          <Layout.Col size='1'>
            <AnimatedTitle>Real-time Team Collaboration</AnimatedTitle>
            {/* if the signin method detects an error, show the flashbag */}
            { auth.signinError && 
              <Flashbag title='Oops! An error occured.' >
                {auth.signinErrorMessage
                  ? auth.signinErrorMessage
                  : 'Fields cannot be empty'}
              </Flashbag>
             }
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "easeOut", duration: 1, delay: 0.3 }}
              style={{ margin: '2.3rem 0' }}
              onSubmit={handleSignin} >
            <Typography.BodyLarge>Sign in to get started.</Typography.BodyLarge>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "easeOut", duration: 1, delay: 0.3 }}
                style={{ margin: '3.6rem 0rem' }} >
                <Input
                  required
                  error={auth.signinError}
                  label="Username"
                  name='username'
                  type='text'
                  defaultValue=''
                  placeholder="Username"
                  onChange={e => setUserName(
                    e.target.value
                      .trim()
                      .toLowerCase()
                  )}
                />
                <Input
                  required
                  error={auth.signinError}
                  label="Password"
                  name='password'
                  type='password'
                  defaultValue=''
                  placeholder="••••••••"
                  onChange={e => setPassword(
                    e.target.value
                      .trim()
                      .toLowerCase()
                  )}
                  style={{ marginBottom: '1.3rem' }}
                />
                <Typography.BodySmall>Don't have an account? <Link to='/'>Sign up</Link></Typography.BodySmall>
              </motion.div>
              <Button.Action type='submit' onClick={handleSignin} >Sign In</Button.Action>
            </motion.form>
          </Layout.Col>
          <Layout.Col size='2'>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "easeOut", duration: 1 }}
              width="100%"
              src="/SignIn.png"
              alt="sign in" />
          </Layout.Col>
        </Layout.Row>
      </Layout>
    </>
  )
}
// Source : https://usehooks.com/

import React, { useState, useContext, createContext } from "react";
import { useLocalStorage } from './use-local-storage';
import axios from 'axios';

// API url from .env
export const apiURL = process.env.REACT_APP_API_URL;

const authContext = createContext();
// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [localStorageUser, setLocalStorageUser] = useLocalStorage('user', user);

  const [signinError, setSigninError] = useState(null);
  const [signinErrorMessage, setSigninErrorMessage] = useState(null);

  const [signupError, setSignupError] = useState(null);
  const [signupErrorMessage, setSignupErrorMessage] = useState(null);

  const [messages, setMessages] = useState([]);

  async function signin(username, password) {
    try {
      const response = await axios.get(`${apiURL}/login/${username}/${password}`, {
        params: {
          dataType: 'JSON'
        }
      });

      // Set an object in localStorage if the server's repsonse isn't failure
      if (response.data.result.status !== 'failure') {
        setLocalStorageUser({
          username: username,
          token: response.data.result.token,
          id: response.data.result.id
        })
        // Set the user with the datas stored in localStorageUser
        // ... set errors to null
        setUser(localStorageUser);
        setSigninError(null);
        setSigninErrorMessage(null);
      } else {
        // Set errors to true and store the message value
        setSigninError(true);
        setSigninErrorMessage(`${response.data.result.message}`);
      }
    } catch (error) {
      // If server's repsonse is another error than failure, set errors to true
      setSigninError(true);
    }
  }

  async function signup(username, password) {
    try {
      const response = await axios.get(`${apiURL}/signup/${username}/${password}`, {
        params: {
          dataType: 'JSON'
        }
      });
      if (response.data.result.status !== 'failure') {
        setLocalStorageUser({
          username: username,
          token: response.data.result.token,
          id: response.data.result.id
        })
        setUser(localStorageUser);
        setSignupError(null);
        setSignupErrorMessage(null);
      } else {
        setSignupError(true);
        setSignupErrorMessage(`${response.data.result.message}`)
      }
    } catch (error) {
      setSignupError(true);
    }
  }


  // Get messages list from Kwick API
  async function getMessages() {
    try {
      const response = await axios.get(`${apiURL}/talk/list/${localStorageUser.token}/0`);
      setMessages(response.data.result.talk);

    } catch (error) {
      console.error(error);
    }
  }

  function signout() {
    // remove datas from localStorage
    if (localStorageUser) {
      setLocalStorageUser(null);
    }

  }

  // Return auth methods, localStorageUser datas and get messages mothod
  return {
    apiURL,
    localStorageUser,
    signin,
    signinError,
    signinErrorMessage,
    signup,
    signupError,
    signupErrorMessage,
    signout,
    messages,
    getMessages,
  };
}
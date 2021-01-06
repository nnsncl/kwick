// Source : https://usehooks.com/

import React, { useState, useContext, createContext } from "react";
import { useLocalStorage } from './use-local-storage';
import axios from 'axios';

const authContext = createContext();
export const apiURL = process.env.REACT_APP_API_URL;

export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
  }

  export const useAuth = () => {
    return useContext(authContext);
  };

  function useProvideAuth() {
    const [user, setUser] = useState(null);
    const [localStorageUser, setLocalStorageUser] = useLocalStorage('user', user);

    const [signinError, setSigninError] = useState(null);
    const [signinErrorMessage, setSigninErrorMessage] = useState(null);

    const [signupError, setSignupError] = useState(null);
    const [signupErrorMessage, setSignupErrorMessage] = useState(null);

    async function signin(username, password) {
      try {
        const response = await axios.get(`${apiURL}/login/${username}/${password}`, {
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
          setSigninError(null);
          setSigninErrorMessage(null);
        } else {
          setSigninError(true);
          setSigninErrorMessage(`${response.data.result.message}`);
        }
      } catch (error) {
        setSigninError(true);
      }
    }

    async function signup(username, password) {
        try {
          const response = await axios.get(`${apiURL}/signup/${username}/${password}`,{
            params: {
              dataType: 'JSON'
            }
          });
          setLocalStorageUser({
              username: username,
              token: response.data.result.token,
              id: response.data.result.id
          })
          setUser(localStorageUser);
        } catch (error) {
          console.error(error);
          setSignupError(true);
        }
      }

      function signout() {
        setLocalStorageUser(null);
      }
    
    // Return the user object and auth methods
    return {
      apiURL,
      localStorageUser,
      signin,
      signinError,
      signinErrorMessage,
      signup,
      signupError,
      signout
    };
  }
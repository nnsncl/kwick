import React, { useState, useContext, createContext } from "react";
import { useLocalStorage } from './use-local-storage';
import axios from 'axios';

const authContext = createContext();
export const apiURL = 'http://greenvelvet.alwaysdata.net/kwick/api';

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

    async function signin(username, password) {
        try {
          const response = await axios.get(`${apiURL}/login/${username}/${password}`,{
            params: {
              dataType: 'JSON'
            }
          });
          setLocalStorageUser({
              username: username,
              password: password,
              token: response.data.result.token,
              id: response.data.result.id
          })
          setUser(localStorageUser);
          console.log(response.data);
          console.log(localStorageUser);
        } catch (error) {
          console.error(error);
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
              password: password,
              token: response.data.result.token,
              id: response.data.result.id
          })
          setUser(localStorageUser);
          console.log(response.data);
        } catch (error) {
          console.error(error);
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
      signup,
      signout
    };
  }
import React, { useState, useContext, createContext } from "react";
import { useLocalStorage } from './use-local-storage';
import axios from 'axios';

const authContext = createContext();

export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
  }

  export const useAuth = () => {
    return useContext(authContext);
  };

  function useProvideAuth() {
    const [user, setUser] = useState(null);
    const [localStorageUser, setLocalStorageUser] = useLocalStorage();

    const apiURL = 'http://greenvelvet.alwaysdata.net/kwick/api';

    async function signin(username, password) {
        try {
          const response = await axios.get(`${apiURL}/login/${username}/${password}`,{
            params: {
              dataType: 'JSON'
            }
          });
          setUser({
              username: username,
              password: password
          })
          setLocalStorageUser(user)
          console.log(response);
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
          setUser({
              username: username,
              password: password
          })
          setLocalStorageUser(user)

          console.log(response);
        } catch (error) {
          console.error(error);
        }
      }

    // const signout = () => {
    //   return firebase
    //     .auth()
    //     .signOut()
    //     .then(() => {
    //       setUser(false);
    //     });
    // };
  
  
    // Subscribe to user on mount
    // Because this sets state in the callback it will cause any ...
    // ... component that utilizes this hook to re-render with the ...
    // ... latest auth object.
    // useEffect(() => {
    //   const unsubscribe = firebase.auth().onAuthStateChanged(user => {
    //     if (user) {
    //       setUser(user);
    //     } else {
    //       setUser(false);
    //     }
    //   });
  
    //   // Cleanup subscription on unmount
    //   return () => unsubscribe();
    // }, []);
    
    // Return the user object and auth methods
    return {
      user,
      localStorageUser,
      signin,
      signup,
    };
  }
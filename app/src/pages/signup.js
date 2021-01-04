import React, { useState } from 'react';
import axios from 'axios';

export default function Signup(){
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    

    async function signUp() {
        try {
          const response = await axios.get(`http://greenvelvet.alwaysdata.net/kwick/api/signup/${username}/${password}`,{
            params: {
              dataType: 'JSON'
            }
          });
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      }


    return (
        <form onSubmit={e => e.preventDefault()} >  
        <input type='text' defaultValue='' placeholder="username"  onChange={e => setUserName(e.target.value)} />
        <input type='password' defaultValue='' placeholder="password"  onChange={e => setPassword(e.target.value)} />
        <button type='submit' onClick={signUp} >submit</button>
      </form>
    )
}
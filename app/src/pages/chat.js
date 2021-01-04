import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import { useAuth } from '../hooks/use-auth';
import axios from 'axios';

export default function Chat() {
    const auth = useAuth();
    const [users, setUsers] = useState([]);

    const [messages, setMessages] = useState([]);

    console.log(auth.localStorageUser);
    console.log(auth);

    useEffect(() => {
        async function getLoggedUsers() {
            try {
                const response = await axios.get(`${auth.apiURL}/user/logged/${auth.localStorageUser.token}`);
                setUsers(response.data.result.user);

            } catch (error) {
                console.error(error);
            }
        }
        getLoggedUsers();
        //eslint-disable-next-line 
    }, [])

    useEffect(() => {
        async function getMessages() {
            try {
                const response = await axios.get(`${auth.apiURL}/talk/list/${auth.localStorageUser.token}/0`);
                setMessages(response.data.result.talk);

            } catch (error) {
                console.error(error);
            }
        }
        getMessages();
        //eslint-disable-next-line
    }, [])


    

    return auth.localStorageUser ? (
        <>
            {users && users.map((user) => (
                <p key={user} >
                    {user}
                </p>
            ))}

            {/* {messages && messages.map((message) => (
                <div key={message.timestamp} >
                    <p>{message.timestamp}</p>
                    <p>{message.user_name}</p>
                    <p>{message.content}</p>
                </div>
            ))} */}

        </>
    ) : (<Redirect to="/signin" />);
}
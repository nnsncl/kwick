import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import { useAuth } from '../hooks/use-auth';
import axios from 'axios';

export default function Chat() {
    const auth = useAuth();
    const [users, setUsers] = useState([]);

    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');

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


    const handlePostMessage = () => {
        async function sendMessage() {
            try {
                await axios.get(`${auth.apiURL}/say/${auth.localStorageUser.token}/${auth.localStorageUser.id}/${message}`);
            } catch (error) {
                console.error(error);
            }
        }
        sendMessage();
    }


    return auth.localStorageUser ? (
        <>
            <h2>Users</h2>
            {users && users.map((user) => (
                <p key={user} >
                    {user}
                </p>
            ))}

            <h2>Messages</h2>
            {messages && messages.map((message) => (
                <div key={message.timestamp} >
                    <p>{message.timestamp}</p>
                    <p>{message.user_name}</p>
                    <p>{message.content}</p>
                </div>
            ))}

            <form onSubmit={handlePostMessage} >
                <input
                    placeholder="Send a message"
                    value={message ? message : ''}
                    type='text'
                    onChange={ e => {setMessage(e.target.value)} }
                />
                <button type='submit' >Send</button>
            </form>

        </>
    ) : (<Redirect to="/signin" />);
}
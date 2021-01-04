import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import { useAuth } from '../hooks/use-auth';

import { UsersContainer } from '../containers';

export default function Chat() {
    const auth = useAuth();

    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');

    async function getMessages() {
        try {
            const response = await axios.get(`${auth.apiURL}/talk/list/${auth.localStorageUser.token}/0`);
            setMessages(response.data.result.talk);

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getMessages();
        //eslint-disable-next-line
    }, [])

    const handlePostMessage = (e) => {
        e.preventDefault();
        async function sendMessage() {
            try {
                await axios.get(`${auth.apiURL}/say/${auth.localStorageUser.token}/${auth.localStorageUser.id}/${message}`);
            } catch (error) {
                console.error(error);
            }
        }
        sendMessage();
        setMessage('');
        getMessages();
    }

    return auth.localStorageUser ? (
        <>
            <h2>Users</h2>
            <UsersContainer />

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

            <div>
                <button onClick={() => {
                    axios.get(`${auth.apiURL}/logout/${auth.localStorageUser.token}/${auth.localStorageUser.id}`);
                    auth.signout();
                }} >Sign out</button>
            </div>
        </>
    ) : (<Redirect to="/signin" />);
}
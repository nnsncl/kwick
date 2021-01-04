import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import { useAuth } from '../hooks/use-auth';

import { UsersContainer, MessagesContainer, NavigationContainer } from '../containers';

export default function Chat() {
    const auth = useAuth();

    return auth.localStorageUser ? (
        <>
            <NavigationContainer />
            <h2>Users</h2>
            <UsersContainer />
            <h2>Messages</h2>
            <MessagesContainer />
            <div>
                <button onClick={() => {
                    axios.get(`${auth.apiURL}/logout/${auth.localStorageUser.token}/${auth.localStorageUser.id}`);
                    auth.signout();
                }} >Sign out</button>
            </div>
        </>
    ) : (<Redirect to="/signin" />);
}
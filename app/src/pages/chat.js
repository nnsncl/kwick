import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import { useAuth } from '../hooks/use-auth';

import { UsersContainer, MessagesContainer } from '../containers';
import { Layout, Button } from '../components';

export default function Chat() {
    const auth = useAuth();

    return auth.localStorageUser ? (
        <Layout maxFreeze >
            <Layout.Row stretchContent >
                <Layout.Col size='1' >
                    <UsersContainer />
                    <div>
                        <Button.Action onClick={() => {
                            axios.get(`${auth.apiURL}/logout/${auth.localStorageUser.token}/${auth.localStorageUser.id}`);
                            auth.signout();
                        }} >Sign out</Button.Action>
                    </div>
                </Layout.Col>
                <Layout.Col size='3' >
                    <MessagesContainer />
                </Layout.Col>
            </Layout.Row>
        </Layout>
    ) : (<Redirect to="/signin" />);
}
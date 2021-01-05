import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useAuth } from '../hooks/use-auth';

import { Typography } from '../components';

import styled from 'styled-components';


const Container = styled.aside`
    background: red;
    padding: 2.3rem;
    border-radius: 16px;
    width: 100%;
`;
const Frame = styled.div`
    :first-of-type{
        padding: 0 0 2.3rem 0;
    }
    padding: 2.3rem 0;
    display: flex;
    flex: 1;
    border-bottom: 1px solid #D8D8D8;
`;
const Footer = styled.footer``;

export default function UsersContainer() {
    const auth = useAuth();
    const [users, setUsers] = useState([]);

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

    return (
        <Container>
            { users
                && users.map((user) => (
                    <Frame key={user}>
                        <Typography.Body>
                            {user}
                        </Typography.Body>
                    </Frame>
                ))}
        </Container>
    )
}
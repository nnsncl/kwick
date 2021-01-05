import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useAuth } from '../hooks/use-auth';

import { Typography, Label, Avatar } from '../components';

import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    max-height: 86vh;
    overflow: scroll;
`;
const Frame = styled.div`
    :first-of-type{
        padding: 0 0 2.3rem 0;
    }
    padding: 2.3rem 0;
    display: flex;
    justify-content: space-between;
    flex: 1;
`;
const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    p {
        margin-left: 1.3rem;
    }
`;

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
                        <Item>
                            <Avatar>{user.slice(0, 1)}</Avatar>
                            <Typography.Body>
                                <b>{user}</b>
                            </Typography.Body>
                        </Item>
                        <Label>online</Label>
                    </Frame>
                ))}
        </Container>
    )
}
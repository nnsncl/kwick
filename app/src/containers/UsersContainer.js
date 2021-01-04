import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useAuth } from '../hooks/use-auth';

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
        <>
            { users
                && users.map((user) => (
                    <p key={user} >
                        {user}
                    </p>
                ))}
        </>
    )
}
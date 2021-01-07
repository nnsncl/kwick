import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import { useAuth } from '../hooks/use-auth';
import IdleTimer from '../utils/idle-timer';

import { UsersContainer, MessagesContainer } from '../containers';
import { Layout, Button, Navigation, Modal } from '../components';

export default function Chat() {
    const auth = useAuth();
    const [timeout, setTimeout] = useState(false);
    const [expired, setExpired] = useState(false);
    const [toggleUsersModal, setToggleUsersModal] = useState(false);

    useEffect(() => {
        const timer = new IdleTimer({
            timeout: 1200, //expire after 20 mins of inactivity

            // This callback will be triggered if the users are in the app and have the idle timeout.
            onTimeout: () => {
                console.log('Session timeout')
                setTimeout(true);
            },
            // This callback will be triggered if the users re-open the app after the expired time.
            onExpired: () => {
                console.log('Session expired')
                setExpired(true);
            }
        });

        return () => {
            timer.cleanUp();
        };

    }, []);

    // Redirect to Signin if user hasn't signed in or if his session is expired
    return (
        auth.localStorageUser
        && (!timeout && !expired)
    ) ? (
            <>
                <Modal
                    title="Online users"
                    toggleModal={toggleUsersModal}
                    setToggleModal={setToggleUsersModal}
                >
                    <UsersContainer />
                </Modal>
                <Navigation>
                    <Button.Small onClick={() => setToggleUsersModal(!toggleUsersModal)}  >
                        <svg width="24" height="24" viewBox="0 0 48 48" fill="none">
                            <path opacity="0.3" d="M24 22C19.5817 22 16 18.4183 16 14C16 9.58172 19.5817 6 24 6C28.4183 6 32 9.58172 32 14C32 18.4183 28.4183 22 24 22Z" fill="#111" />
                            <path d="M6.0013 40.3984C6.77652 30.853 14.5238 26 23.9667 26C33.5424 26 41.4098 30.5864 41.9958 40.4C42.0192 40.7909 41.9958 42 40.4934 42C33.0822 42 22.0694 42 7.455 42C6.95342 42 5.95908 40.9184 6.0013 40.3984Z" fill="#111" />
                        </svg>
                    </Button.Small>
                    <Button.Small onClick={() => {
                        axios.get(`${auth.apiURL}/logout/${auth.localStorageUser.token}/${auth.localStorageUser.id}`);
                        auth.signout();
                    }}>
                        <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.246 10.6053C16.1702 10.0002 17.4098 10.2589 18.0148 11.183C18.6199 12.1072 18.3612 13.3468 17.437 13.9518C14.0694 16.1566 12 19.9006 12 24C12 30.6274 17.3726 36 24 36C30.6274 36 36 30.6274 36 24C36 19.991 34.0217 16.3194 30.7751 14.094C29.8641 13.4695 29.6318 12.2246 30.2563 11.3136C30.8808 10.4025 32.1256 10.1702 33.0367 10.7947C37.36 13.7582 40 18.6577 40 24C40 32.8366 32.8366 40 24 40C15.1634 40 8 32.8366 8 24C8 18.5371 10.7611 13.5415 15.246 10.6053Z" fill="#111" />
                            <rect opacity="0.3" x="22" y="6" width="4" height="20" rx="1" fill="#111" />
                        </svg>
                    </Button.Small>
                </Navigation>
                <Layout maxFreezeSmall >
                    <Layout.Row stretchContent >
                        <Layout.Col size='1' >
                            <MessagesContainer />
                        </Layout.Col>
                    </Layout.Row>
                </Layout>
            </>
        ) : (
            auth.signout(),
            <Redirect to="/signin" />
        );
}
import React, { useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useAuth } from '../hooks/use-auth';
import { getTimestamp } from '../utils/get-timestamp';

import { Typography } from '../components';
import { Container, Frame, BoldBody, Wrapper } from './styles/Messages';
import { container } from './styles/Animation';
import ChatbarContainer from './ChatbarContainer';

export default function MessagesContainer() {
    const auth = useAuth();
    const lastMessageRef = useRef();

    useEffect(() => {
        auth.getMessages();
        //eslint-disable-next-line
    }, [])

    useEffect(() => {
        const scrollToLastMessage = () => {
            lastMessageRef.current.scrollIntoView({
                behavior: "smooth",
            });
        }
        if (auth.messages) {
            scrollToLastMessage()
        }
    }, [auth.messages])


    return (
        <Container
            variants={container}
            initial="hidden"
            animate={"visible"}
        >
            {auth.messages && auth.messages.map((message) => (
                <Frame
                    key={uuidv4()}
                    variant={`${message.user_name === auth.localStorageUser.username ? 'current' : ''}`} >
                    <BoldBody>{message.user_name}</BoldBody>
                    <Wrapper variant={`${message.user_name === auth.localStorageUser.username ? 'current' : ''}`} >
                        <Typography.Body>{message.content}</Typography.Body>
                    </Wrapper>
                    <Typography.BodySmall>{getTimestamp(message.timestamp)}</Typography.BodySmall>
                </Frame>
            ))}
            <div ref={lastMessageRef} />
            <ChatbarContainer />
        </Container>
    )
}
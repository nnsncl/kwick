import styled from 'styled-components';
import { Typography } from '../../components';

import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: white;
    padding: 3.6rem 2.3rem 1.3rem 2.3rem;
    border-radius: 16px;
    max-height: 95vh;
    overflow: scroll;
`;

export const Wrapper = styled(motion.div)`
    border-radius: 0 16px 16px 16px;
    padding: 1.9rem 2.3rem;
    width: fit-content;
    max-width: 66.6%;
    word-break: break-word;
    margin-bottom: 0.9rem;

    ${(props) => props.variant === 'current'
        ? (` background: #52b788;
             color: white;
             border-radius: 2.3rem 0 2.3rem 0;
             `)
        : (` background: #f5f3f4;
             color: #111;
             border-radius: 0 2.3rem 0 2.3rem;
             `)
    }
`;

export const Frame = styled.div`
    display: flex;
    margin-bottom: 2.3rem;
    flex-direction: column;


    ${(props) => props.variant === 'current' && (`
        align-items: flex-end;
    `)}
`;

export const BoldBody = styled(Typography.BodySmall)`
    font-weight: bolder;
    margin-bottom: 0.9rem;
`;


export const ChatInput = styled(motion.form)`
    position: sticky;
    bottom: 0;
    padding: 3.6rem 2.3rem;
    border-radius: 1.6rem;
    background: white;
    width: 100%;
    height: fit-content;
    box-shadow: 0px 7px 15px -3px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;

    input {
        font-size: 1.9rem;
        width: 100%;
        padding: 2.3rem 0;
        border: none;
        outline: none;
    }
`;

export const Counter = styled(Typography.BodySmall)`
    ${(props) => props.error && (`b {color: rgb(220, 47, 2)}`)}
`;

export const ItemContainer = styled.div`
    span {
        margin-right: 1.3rem;
        :last-of-type{
            margin-right: 0;
        }
    }
`;
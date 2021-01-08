import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.button)`
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    font-size: 1.3rem;
    font-weight: bold;
    padding: 1.9rem 3.6rem;
    border-radius: .9rem;
    background: white;
    cursor: pointer;
    transition: ease-out .2s;
    color: #111;
    text-decoration: none;

    &:hover{
        background: #111;
        color: white;
    }
`;

export const Action = styled(motion.button)`
    font-size: 1.6rem;
    padding: 1.9rem 3.6rem;
    border-radius: .9rem;
    border: none;
    background: #212121;
    cursor: pointer;
    transition: ease-out .2s;
    color: #f5f3f4;
    text-decoration: none;
    outline: none;
    font-weight: bold;

    :disabled{
        border: none;
        background: #D8D8D8;
        color: grey;
    }
    
    &:hover{
        background: #000;
        :disabled{
            border: none;
            background: #D8D8D8;
            cursor: not-allowed;
            color: grey;
        }
    }
`;

export const Small = styled(motion.button)`
    font-size: 1.6rem;
    padding: 1.9rem;
    border-radius: .9rem;
    border: none;
    background: none;
    cursor: pointer;
    transition: ease-out .2s;
    color: #111;
    text-decoration: none;
    outline: none;
    font-weight: bold;

    :disabled{
        border: none;
        background: #D8D8D8;
        color: grey;
    }
    
    &:hover{
        background: none;
        :disabled{
            border: none;
            background: #D8D8D8;
            cursor: not-allowed;
            color: grey;
        }
    }
`;


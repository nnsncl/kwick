import styled, { keyframes } from 'styled-components';

const Spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const Wrapper = styled.div`
    width: 2.3rem;
    height: 2.3rem;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    background-color: rgba(0, 0, 0, 0.1);

    ::before, ::after {
        width: 100%; 
        height: 100%;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 0;
        animation: 1s infinite ease-in-out;
    }

    ::before{
        content: '';
        width: 0.3rem;
        height: 1.3rem;
        margin: 0 auto;
        background: #111;
        top: auto;
        bottom: 20%;
        left: 44%;
        transform-origin: 50% 50%;
        animation: ${Spin} 1s infinite ease-out;
    }
`;
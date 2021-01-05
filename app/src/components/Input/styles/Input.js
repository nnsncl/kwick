import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.3rem;
    width: 100%;
`;

export const Label = styled.label`
    font-size: 1.3rem;
    margin-bottom: 0.9rem;
`;
export const Field = styled.input`
    background: white;
    border-radius: 9px;
    border: none;
    padding: 1.3rem 1.9rem;
    font-size: 1.6rem;
    outline: none;
    transition: all ease-out .2s;
    ::placeholder{
        opacity: 0.3;
    }
`;
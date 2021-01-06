import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.3rem;
`;

export const Label = styled.label`
    font-size: 1.3rem;
    margin-bottom: 0.9rem;
    font-weight: bolder;
`;
export const Field = styled.input`
    background: white;
    border-radius: 9px;
    padding: 1.3rem 1.9rem;
    font-size: 1.6rem;
    outline: none;
    transition: all ease-out .2s;

    ${(restProps) => restProps.error
        ? (`border: 1px solid rgb(220, 47, 2);`)
        : (`border: 1px solid white;`)
    }

    ::placeholder{
        opacity: 0.3;
    }
    :hover, :active, :focus {
        border-color: #D8D8D8;
    }
    :disabled{
        background: #D8D8D8;
        border-color: #D8D8D8;
        cursor: not-allowed;
    }
`;
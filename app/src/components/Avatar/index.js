import React from 'react';
import { Container } from './styles/Avatar';

export default function Avatar({ children, ...restProps }) {
    return <Container { ...restProps }>{children}</Container>
}
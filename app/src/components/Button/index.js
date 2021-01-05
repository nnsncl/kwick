import React from 'react'
import { Container, Action, Small } from './styles/Button'

export default function Button({ children, ...restProps }) {
    return (
        <Container
            whileHover={{ scale: 1.1 }}
            {...restProps} >
            {children}
        </Container>
    )
}

Button.Action = function ButtonAction({ children, ...restProps }) {
    return (
        <Action
            whileHover={{ scale: 0.95 }}
            {...restProps}>
            {children}
        </Action>
    )
}
Button.Small = function ButtonSmall({ children, ...restProps }) {
    return (
        <Small
            whileHover={{ scale: 0.95 }}
            {...restProps}>
            {children}
        </Small>
    )
}
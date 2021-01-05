import React from 'react'
import { Container, Action } from './styles/Button'

export default function Button({ children, ...restProps }) {
    return (
        <Container {...restProps} >
            {children}
        </Container>
    )
}

Button.Action = function ButtonAction({ children, ...restProps }) {
    return <Action {...restProps}>{children}</Action>
}
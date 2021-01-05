import React from 'react'
import { Container, Row, Col } from './styles/Layout'

export default function Layout({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Layout.Row = function LayoutRow({ children, ...restProps }) {
    return <Row {...restProps}>{children}</Row>
}

Layout.Col = function LayoutCol({ children, ...restProps }){
    return <Col {...restProps}>{children}</Col>
}
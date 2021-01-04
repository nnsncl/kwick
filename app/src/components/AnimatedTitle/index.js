import React from 'react'
import { Container, Frame, Item } from './styles/AnimatedTitle'

const container = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.13,
        },

    }
};

const item = {
    hidden: {
        y: "130%",
        skewY: "13deg",
    },
    visible: {
        y: "0%",
        skewY: "0deg",
        transition: {
            type: "spring",
            stiffness: 68,
            damping: 13,
            mass: 1.5,
            ease: "anticipate",
            duration: 1.3,
        }
    }
};

export const AnimatedTitle = restProps => {
    return (
        <Container
            variants={container}
            initial="hidden"
            animate={"visible"}>
            {restProps.children.split(" ").map((currentElement, index) => (
                <Frame key={index}>
                    <Item key={index} variants={item}>{currentElement}&nbsp;</Item>
                </Frame>
            ))}
        </Container>
    )
}

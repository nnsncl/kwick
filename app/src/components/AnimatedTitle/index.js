import React from 'react'
import { Container, Frame, Item } from './styles/AnimatedTitle'

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.13,
        },

    }
};

const item = {
    hidden: {
        y: "113%",
        skewY: "36deg",
        transformOrigin: 'left bottom'
    },
    visible: {
        y: "0%",
        skewY: "0deg",
        transition: {
            type: "spring",
            stiffness: 74,
            damping: 16,
            mass: 1.9,
            ease: "anticipate"
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

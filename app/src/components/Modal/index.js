import React from 'react';
import { AnimatePresence } from 'framer-motion';
import {
    ViewportOverlay,
    ModalWrapper,
    ModalHeading,
    ModalContent,
} from './styles/Modal';
import { Button, Typography } from '../../components';

const modalOrchestration = {
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.1,
            duration: 0.19,
        },
    },
    hidden: {
        opacity: 0,
        transition: {
            when: "afterChildren",
            duration: 0.19,
        },
    },
}

const modalItem = {
    visible: {
        opacity: 1,
        y: "0%",
        transition: {
            type: 'spring',
            stiffness: 95,
            mass: 0.3,
        }
    },
    hidden: {
        opacity: 0,
        y: "-9%",
        transition: {
            duration: 0.19,
        }
    }
};

export default function Modal({
    toggleModal,
    setToggleModal,
    title,
    body,
    modifiers,
    children,
    ...restProps }) {
    return (
        <AnimatePresence initial={false} >
            { toggleModal
                ? <ViewportOverlay
                    key="modal-overlay"
                    initial='hidden'
                    animate='visible'
                    exit='hidden'
                    variants={modalOrchestration}
                >
                    <ModalWrapper variants={modalOrchestration}>
                        <ModalHeading variants={modalItem} >
                            <Typography.BodyLarge>{title}</Typography.BodyLarge>
                            <Button.Small
                                onClick={() => setToggleModal(!toggleModal)}
                                aria-label="Close modal">
                                &#215;
                            </Button.Small>
                        </ModalHeading>
                        <ModalContent variants={modalItem} >
                        {children}
                        </ModalContent>
                    </ModalWrapper>
                </ViewportOverlay>
                : null}
        </AnimatePresence>
    );
};
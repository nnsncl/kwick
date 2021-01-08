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
    alert }) {
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
                        <ModalHeading alert={alert} variants={modalItem} >
                            <Typography.BodyLarge>{title}</Typography.BodyLarge>
                            {
                                alert
                                    ? <Button.Small
                                        aria-label="Reconnect">
                                        <svg height="24px" width="24px" viewBox="0 0 24 24">
                                            <defs />
                                            <g fill="none" fillRule="evenodd">
                                                <path d="M0 0h24v24H0z" />
                                                <path fill="#DC2F02" d="M11.1669899 4.49941818L2.82535718 19.5143571c-.26821318.4827837-.09426938 1.091587.38851435 1.3598002.148558.0825322.31569868.1258427.48564293.1258427H21.2169432c.5522847 0 1-.4477153 1-1 0-.1840048-.0507689-.3644421-.1467182-.52145L12.894429 4.4636111c-.2879889-.47125454-.9034773-.61982071-1.3747318-.33183182-.1473378.09003974-.2688504.21669655-.3527073.3676389z" opacity=".3" />
                                                <rect width="2" height="7" x="11" y="9" fill="#DC2F02" rx="1" />
                                                <rect width="2" height="2" x="11" y="17" fill="#DC2F02" rx="1" />
                                            </g>
                                        </svg>
                                    </Button.Small>
                                    : <Button.Small
                                        onClick={() => setToggleModal(!toggleModal)}
                                        aria-label="Close modal">
                                        &#215;
                                      </Button.Small>
                            }
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
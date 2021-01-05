import styled from 'styled-components';
import { motion } from 'framer-motion';


export const ViewportOverlay = styled(motion.div)`
    z-index: 999;
    background: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

export const ModalWrapper = styled(motion.div)`
    min-width: 384px;
    width: 33.3%;
    padding: 3.6rem 2.3rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    background: white;
    color: #111;
    border-radius: 0.9rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ModalHeading = styled(motion.header)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5.6rem;

    h3,h4,h5,h6{
        line-height: 1;
        margin: 0;
        padding: 0;
    }
`;


export const ModalContent = styled(motion.div)`
   line-height: 1.3;

   form {
        margin-top: 2.3rem;
        display: flex;
        flex-direction: column;
        width: 100%;
   }
`;

export const ModalFooter = styled(motion.footer)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

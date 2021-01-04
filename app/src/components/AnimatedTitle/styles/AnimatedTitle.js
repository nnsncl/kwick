import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.h1)`
  overflow: hidden;
  width: 100%;
  font-size: 8.6rem;
  font-weight: 400;
  letter-spacing: -3.6px;
  transition: font-size ease-in .2s;
  @media(max-width: 1056px) {
    font-size: 6.8rem;
  }
`;

export const Frame = styled.span`
  display: flex;
  align-items: flex-end;
  display: inline-block;
  overflow: hidden;
`;

export const Item = styled(motion.span)`
  display: block;
  margin-bottom: 0.9rem;
`;
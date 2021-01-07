import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeaderWrapper = styled(motion.nav)`
  padding: 3.6rem 2.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  z-index: 999;
`;

export const BrandWrapper = styled.div`
    display: flex;
    align-items: center;

    svg {
        margin-right: 1rem;
    }
`;

export const ActionWrapper = styled.div`
    ul {
        list-style: none;
        li {
            display: flex;
            align-items: center;
            justify-content: center;  
        }
        a {
            text-decoration: none;
            color: #111;
        }
    }
`;
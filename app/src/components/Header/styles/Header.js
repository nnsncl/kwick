import styled from 'styled-components';

export const HeaderWrapper = styled.nav`
  padding: 3.6rem 2.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: fixed;
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
        display: flex;
        a {
            text-decoration: none;
            color: #111;
        }
    }
`;
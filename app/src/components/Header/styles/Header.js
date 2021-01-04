import styled from 'styled-components';

export const HeaderWrapper = styled.nav`
  padding: 1rem 1.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-height: 33.3vh;
    overflow: scroll;
`;
export const Frame = styled.div`
    :first-of-type{
        padding: 0 0 2.3rem 0;
    }
    padding: 2.3rem 0;
    display: flex;
    justify-content: space-between;
    flex: 1;
`;
export const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    p {
        margin-left: 1.3rem;
    }
`;
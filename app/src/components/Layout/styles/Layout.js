import styled from 'styled-components'

const mediaQueries = {
    sm: (styles) => `@media only screen and (max-width: 376px){ ${styles} }`,
    md: (styles) => `@media only screen and (max-width: 672px){ ${styles} }`,
    lg: (styles) => `@media only screen and (max-width: 1056px){ ${styles} }`,
    xl: (styles) => `@media only screen and (max-width: 1241px){ ${styles} }`,
}

export const Container = styled.section`

    ${(restProps) => restProps.maxFreezeLarge && (`
       max-width: 1920px;
    `)}

    ${(restProps) => restProps.maxFreezeSmall && (`
       max-width: 1024px;
    `)}

    margin: 0 auto;
`;

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;

    ${(restProps) => restProps.rowReverse && (`
        @media(max-width: 1241px) {
            flex-direction: column-reverse; 
        }
    `)}

    ${(restProps) => restProps.alignCenter && (`
        justify-content: center; 
        align-items: center;
    `)}
    

    ${(restProps) => restProps.stretchContent && (`
        align-items: stretch;
    `)}

    ${(restProps) => restProps.h100 && (`
        min-height: 100vh;
    `)}

    ${(restProps) => restProps.hasPadding && (`
        padding: 5.6rem 0;
    `)}

`;

export const Col = styled.div`
    flex: ${(restProps) => restProps.responsiveSize
        ? `${restProps.responsiveSize}`
        : `${restProps.size}
    `};

    ${(restProps) => restProps.breakPoint &&
        mediaQueries[restProps.breakPoint](`
            display: none;
    `)}

    padding: 2.3rem;
    margin: 0 9px;
`;
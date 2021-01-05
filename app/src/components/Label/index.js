import React from 'react';
import { Wrapper } from './styles/Label';

export default function Label({ children, ...restProps }){
    return <Wrapper {...restProps} >{children}</Wrapper>
}
import React from 'react';
import { HeaderWrapper, BrandWrapper, ActionWrapper } from './styles/Header';
export default function Navigation({children, ...restProps}){
    return (
        <HeaderWrapper {...restProps} >
        <BrandWrapper>
            <svg width="32" height="32" viewBox="0 0 394 394" fill="none" >
                <circle cx="197" cy="197" r="197" fill="#111" />
                <ellipse cx="298" cy="176" rx="15" ry="18" fill="#FAFAFA" />
                <ellipse cx="94" cy="176" rx="15" ry="18" fill="#FAFAFA" />
                <path d="M183.058 247.255L210.538 149.949C210.853 148.831 212.5 149.059 212.5 150.22V234.381C212.5 237.753 210.386 240.762 207.214 241.906L185.661 249.68C184.13 250.232 182.615 248.821 183.058 247.255Z" fill="#FAFAFA" />
            </svg>
        </BrandWrapper>
        <ActionWrapper>
            <ul>
                <li>
                    {children}
                </li>
            </ul>
        </ActionWrapper>
    </HeaderWrapper>
    )
}
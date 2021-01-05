import React from 'react';
import { Wrapper, Label, Field } from './styles/Input';

export default function Input({ label, name, htmlFor, value, placeholder, type, ...restProps }) {
    return (
        <Wrapper>
            <Label htmlFor={htmlFor} >{label}</Label>
            <Field name={name} placeholder={placeholder} type={type} { ...restProps } />
        </Wrapper>
    )
}
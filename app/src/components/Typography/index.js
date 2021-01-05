import React from 'react'
import {
    TitleLarge,
    TitleMd,
    TitleSm,
    TitleXs,
    TitleXxs,
    TitleH6,
    BodyLarge,
    Body,
    BodySmall
  } from './styles/Typography'

export default function Typography({ children}) {
    return <>{children}</>
}

Typography.TitleLarge = function TypographyTitleLarge({ children, ...restProps }) {
    return <TitleLarge {...restProps} >{children}</TitleLarge>
}

Typography.TitleMd = function TypographyTitleMd({ children, ...restProps }) {
    return <TitleMd {...restProps} >{children}</TitleMd>
}

Typography.TitleSm = function TypographyTitleSm({ children, ...restProps }) {
    return <TitleSm {...restProps} >{children}</TitleSm>
}

Typography.TitleXs = function TypographyTitleXs({ children, ...restProps }) {
    return <TitleXs {...restProps} >{children}</TitleXs>
}

Typography.TitleXxs = function TypographyTitleXxs({ children, ...restProps }) {
    return <TitleXxs {...restProps} >{children}</TitleXxs>
}

Typography.TitleH6 = function TypographyTitleH6({ children, ...restProps }) {
    return <TitleH6 {...restProps} >{children}</TitleH6>
}

Typography.BodyLarge = function TypographyBodyLarge({ children, ...restProps }) {
    return <BodyLarge {...restProps} >{children}</BodyLarge>
}

Typography.Body = function TypographyBody({ children, ...restProps }) {
    return <Body {...restProps} >{children}</Body>
}

Typography.BodySmall = function TypographyBodySmall({ children, ...restProps }) {
    return <BodySmall {...restProps} >{children}</BodySmall>
}
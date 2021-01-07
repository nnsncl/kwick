import React from 'react';

import { Typography } from '../../components';
import { Wrapper, Frame } from './styles/Flashbag';

export default function Flashbag({ title, children, ...restProps }) {
    return (
        <Wrapper {...restProps} >
            <Frame>
                <Typography.BodyLarge>
                    <b>{title}</b>
                </Typography.BodyLarge>
                <svg height="24px" width="24px" viewBox="0 0 24 24">
                    <defs />
                    <g fill="none" fillRule="evenodd">
                        <path d="M0 0h24v24H0z" />
                        <path fill="#DC2F02" d="M11.1669899 4.49941818L2.82535718 19.5143571c-.26821318.4827837-.09426938 1.091587.38851435 1.3598002.148558.0825322.31569868.1258427.48564293.1258427H21.2169432c.5522847 0 1-.4477153 1-1 0-.1840048-.0507689-.3644421-.1467182-.52145L12.894429 4.4636111c-.2879889-.47125454-.9034773-.61982071-1.3747318-.33183182-.1473378.09003974-.2688504.21669655-.3527073.3676389z" opacity=".3" />
                        <rect width="2" height="7" x="11" y="9" fill="#DC2F02" rx="1" />
                        <rect width="2" height="2" x="11" y="17" fill="#DC2F02" rx="1" />
                    </g>
                </svg>
            </Frame>
            <Typography.BodySmall>{children}</Typography.BodySmall>
        </Wrapper>
    )
}
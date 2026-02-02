import React from 'react';
import { Icon } from '../icon/Icon';

type LogoPropsType = {
    stroke?: string;
    fill?: string;
};

export function Logo(props: LogoPropsType) {
    return (
        <a href=''>
            <Icon
                iconId={'logo'}
                width='140'
                height='40'
                viewBox='0 0 140 40'
                stroke={props.stroke}
                fill={props.fill}
            />
        </a>
    );
}

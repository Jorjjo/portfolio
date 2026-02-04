import React from 'react';
import iconsSprite from '../../assets/images/icons-sprite.svg';


type IconPropsType = {
    iconId: string;
    width?: string;
    height?: string;
    viewBox?: string;
};

export function Icon(props: IconPropsType) {
    return (
        <>
            <svg
                width={props.width || '60'}
                height={props.height || '60'}
                viewBox={props.viewBox || '0 0 60 60'}
            >
                <use xlinkHref={`${iconsSprite}#${props.iconId}`}></use>
            </svg>
        </>
    );
}
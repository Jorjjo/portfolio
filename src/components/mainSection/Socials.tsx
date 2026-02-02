import React from 'react';
import { StyledBtn } from '../Button.styled';
import { Icon } from '../icon/Icon';
import { FlexWrapper } from '../FlexWrapper';

type SocialsPropsType = {
    gap: string
}

export function Socials(props:SocialsPropsType) {
    return (
        <FlexWrapper gap={props.gap}>
            <StyledBtn btnSize='square'>
                <Icon
                    iconId='discord'
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                />
            </StyledBtn>
            <StyledBtn btnSize='square'>
                <Icon
                    iconId='reddit'
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                />
            </StyledBtn>
            <StyledBtn btnSize='square'>
                <Icon
                    iconId='discord'
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                />
            </StyledBtn>
            <StyledBtn btnSize='square'>
                <Icon
                    iconId='discord'
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                />
            </StyledBtn>
        </FlexWrapper>
    );
}


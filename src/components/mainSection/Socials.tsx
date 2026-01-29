import React from 'react';
import { FlexWrapper } from '../FlexWrapper';
import { StyledBtn } from '../Button.styled';
import { Icon } from '../icon/Icon';

export function Socials() {
    return (
        <FlexWrapper gap='32px'>
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

import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../FlexWrapper';

export function Slide() {
    return (
        <StyledSlide>
            <FlexWrapper direction='column' align='center' gap='24px'>
                <UserIcon />
                <SlideText>
                    I recently had to jump on 10+ different calls across eight
                    different countries to find the right owner.
                </SlideText>
                <UserName>Evren Shah</UserName>
            </FlexWrapper>
        </StyledSlide>
    );
}

const StyledSlide = styled.div`
    max-width: 370px;
    padding: 40px;
    border-radius: 20px;
    box-shadow:
        0 6px 8px 0 rgba(24, 39, 75, 12%),
        0 8px 16px -6px rgba(24, 39, 75, 8%);
`;

const UserIcon = styled.img`
    width: 96px;
    height: 96px;
    background-color: grey;
    border-radius: 50%;
`;

const SlideText = styled.p`
    font-size: 16px;
`;

const UserName = styled.span``;

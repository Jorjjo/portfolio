import React from 'react';
import styled from 'styled-components';
import { Slide } from './Slide';
import { FlexWrapper } from '../FlexWrapper';

export function Slider() {
    return (
        <TestimonialsSlider>
            <FlexWrapper justify='space-between' align='center'>
                <Slide />
                <Slide />
                <Slide />
            </FlexWrapper>           
        </TestimonialsSlider>
    );
}

const TestimonialsSlider = styled.div`
    padding: 40px 24px;
`;

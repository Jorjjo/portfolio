import React from 'react';
import styled from 'styled-components';
import { Slide } from './Slide';
import { FlexWrapper } from '../FlexWrapper';

export function Slider() {
    return (
        <TestimonialsSlider>
            <FlexWrapper justify='space-between' align='center' gap='24px'>
                <Slide
                    name='Evren Shah'
                    text='I recently had to jump on 10+ different calls across eight different countries to find the right owner.'
                />
                <Slide
                    name='Flora Sheen'
                    text='I recently had to jump on 10+ different calls across eight different countries to find the right owner. I recently had to jump on 10+ different calls across eight different countries to find the right owner.'
                />
                <Slide
                    name='Evren Shah'
                    text='I recently had to jump on 10+ different calls across eight different countries to find the right owner.'
                />
            </FlexWrapper>
        </TestimonialsSlider>
    );
}

const TestimonialsSlider = styled.div`
    padding: 40px 24px;
`;

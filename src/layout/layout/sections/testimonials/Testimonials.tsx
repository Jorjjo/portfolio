import React from 'react';
import styled from 'styled-components';
import { Container } from '../../../../components/Container';
import { SectionTitle } from '../../../../components/SectionTitle';
import { Slider } from '../../../../components/slider/Slider';

export function Testimonials() {
    return (
        <StyledTestimonials>
            <Container>
                <SectionTitle color='black'>
                    My <b>Testimonials</b>
                </SectionTitle>
                <Slider/>
            </Container>
        </StyledTestimonials>
    );
}

const StyledTestimonials = styled.section``;



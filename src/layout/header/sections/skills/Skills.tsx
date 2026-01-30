import React from 'react';
import { theme } from '../../../../styles/Theme';
import styled from 'styled-components';
import { Container } from '../../../../components/Container';
import { SectionTitle } from '../../../../components/SectionTitle';
import { Skill } from './Skill';
import { FlexWrapper } from '../../../../components/FlexWrapper';

export function Skills() {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle color='black'>My <b>Skills</b></SectionTitle>
                <FlexWrapper wrap='wrap' justify='space-between' gap='40px'>
                    <Skill iconId='git' skillTitle='Git'/>
                    <Skill iconId='react' skillTitle='React'/>
                    <Skill iconId='js' skillTitle='Javascript'/>
                    <Skill iconId='typescript' skillTitle='TypeScript'/>
                    <Skill iconId='nodejs' skillTitle='NodeJS'/>
                    <Skill iconId='Sass' skillTitle='Sass/scss'/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
}

const StyledSkills = styled.section`
    background-color: ${() => theme.colors.primary.primaryBg};
    padding: 60px 0;
`;

// const Test = styled.div`
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
//     gap: 40px;
// `
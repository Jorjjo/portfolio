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
                <SectionTitle align='center' color='black'>
                    My <b>Skills</b>
                </SectionTitle>
                <SkillsWrapper>
                    <FlexWrapper justify='center' wrap='wrap' gap='40px 70px'>
                        <Skill iconId='git' skillTitle='Git' />
                        <Skill iconId='react' skillTitle='React' />
                        <Skill iconId='js' skillTitle='Javascript' />
                        <Skill iconId='typescript' skillTitle='TypeScript' />
                        <Skill iconId='nodejs' skillTitle='NodeJS' />
                        <Skill iconId='Sass' skillTitle='Sass/scss' />
                        <Skill iconId='nextjs' skillTitle='Next.js' />
                    </FlexWrapper>
                </SkillsWrapper>
            </Container>
        </StyledSkills>
    );
}

const StyledSkills = styled.section`
    background-color: ${() => theme.colors.primary.primaryBg};
    padding: 60px 0;
`;

const SkillsWrapper = styled.div`
    padding: 20px 0;
    margin-top: 20px;
`
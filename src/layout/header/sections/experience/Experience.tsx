import React from 'react';
import { Container } from '../../../../components/Container';
import { SectionTitle } from '../../../../components/SectionTitle';
import styled from 'styled-components';
import { theme } from '../../../../styles/Theme';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Job } from './Job';

export function Experience() {
    return (
        <StyledExperince>
            <Container>
                <SectionTitle color='white'>
                    My <b>Experience</b>
                </SectionTitle>
                <FlexWrapper direction='column' gap='32px'>
                    <Job
                        iconId='google'
                        jobTitle='Lead Software Engineer at Google'
                        jobPeriod='Nov 2019 - Present'
                        jobDesc='As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Googles core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.'
                    ></Job>
                    <Job
                        iconId='youtube'
                        jobTitle='Software Engineer at Youtube'
                        jobPeriod='Jan 2017 - Oct 2019'
                        jobDesc='At Youtube, I served as a  Software Engineer, focusing on the design and implementation of backend systems for the social media giants dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.'
                    ></Job>
                    <Job
                        iconId='apple'
                        jobTitle='Junior Software Engineer at Apple'
                        jobPeriod='Jan 2016 - Dec 2017'
                        jobDesc='During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team.'
                    ></Job>
                </FlexWrapper>
            </Container>
        </StyledExperince>
    );
}

const StyledExperince = styled.section`
    background-color: ${() => theme.colors.primary.secondaryBg};
`;

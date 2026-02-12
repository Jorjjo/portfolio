import React from 'react';
import { Container } from '../../../../components/Container';
import styled from 'styled-components';
import { theme } from '../../../../styles/Theme';
import { SectionTitle } from '../../../../components/SectionTitle';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Project } from './Project';
import crypto from '../../../../assets/images/crypto.webp';
import ecom from '../../../../assets/images/ecom.webp';
import website from '../../../../assets/images/website.webp';
import { ProjectsTabs } from './ProjectsTabs';


const tabs = ['all', 'landing page', 'react', 'spa'];

export function Projects() {
    return (
        <StyledProjects>
            <Container>
                <SectionTitle align='center' color='white'>
                    My <b>Projects</b>
                </SectionTitle>
                <ProjectsTabs menuItems={tabs} />
                <FlexWrapper direction='column' gap='28px'>
                    <Project
                        number='01'
                        src={crypto}
                        title='Crypto Screener Application'
                        desc='Im Flora Sheen Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.'
                    />
                    <Project
                        number='02'
                        src={ecom}
                        title='Euphoria - Ecommerce (Apparels) Website Template'
                        desc='Im Flora Sheen Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book. hen an unknown printer took a galley of type and scrambled it to specimen book.'
                    />
                    <Project
                        number='03'
                        src={website}
                        title='Blog Website Template'
                        desc='Im Flora Sheen Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.'
                    />
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
}

const StyledProjects = styled.section`
    background-color: ${theme.colors.primary.secondaryBg};
`;

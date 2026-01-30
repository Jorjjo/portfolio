import React from 'react';
import { Icon } from '../../../components/icon/Icon';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import styled from 'styled-components';
import { theme } from '../../../styles/Theme';
import { Socials } from '../../../components/mainSection/Socials';
import { SectionTitle } from '../../../components/SectionTitle';

export function Main() {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify='space-between' align='center'>
                    <MainContent>
                        <SectionTitle color='black'>Hello I’am <b>Flora Sheen.</b></SectionTitle>
                        <MainTitle>Frontend <span>Developer</span></MainTitle>
                        <SectionTitle color='black'>Based In <b>India</b>.</SectionTitle>
                        <p>
                            I'm Flora Sheen Lorem Ipsum is simply dummy text of
                            the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever
                            since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to specimen book.
                        </p>
                        <Socials/>
                    </MainContent>
                    <Icon
                        iconId='banner'
                        width='630'
                        height='630'
                        viewBox='0 0 630 630'
                    />
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
}

const StyledMain = styled.section`
    background-color: ${() => theme.colors.primary.primaryBg};
`;

const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    max-width: 586px;
    text-align: left;
`;

const MainTitle = styled.h1`
    font-size: 48px;
    font-weight: 800;
    letter-spacing: -0.035em;
`
